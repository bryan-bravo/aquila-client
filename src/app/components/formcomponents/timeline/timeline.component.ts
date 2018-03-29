import { Component, OnInit } from '@angular/core';

import {TimeLine, Stage, FileInfo} from '../../../models/PreAward/TimeLine';
import { MockDataService } from '../../../services/mock-data.service';
import { PreawardService } from '../../../services/preaward.service';
import { ProposalService } from '../../../services/proposal.service';
import {KeysPipe} from '../../../pipes/keys.pipe';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  timeline: TimeLine;
  proposalId: number;
  stage: Stage; // stage to be manipulated for edit and new
  editingNewStage: boolean;
  dialogType: string; // view, edit/add
  preAwardForms: string[] =
  ['Intake', 'Equipment', 'Approval',
  'COI Other Investigator/Key Personnel PHS',
  'COI Other Investigator/Key Personnel NONPHS',
  'COI Principal Investigator PHS',
  'COI Principal Investigator NONPHS',
  'Statement Of Economic Interest',
 ];
 unSelectedForms: string[];
  constructor(private mockService: MockDataService,
              private preAwardService: PreawardService,
              private proposalService: ProposalService,
              private keysPipe: KeysPipe
    ) {
      this.populateTimeLine();
    }

  ngOnInit() {
    this.dialogType = 'view-basic-timeline';
  }
  // timeline
  populateTimeLine() {
  const obj = this.proposalService.getTimeline();
    this.timeline = this.parseDates(obj.timeline);
    // parse the object maps into iterables
    this.timeline.stages.forEach((stage, i, stages) => {
        stages[i] = this.parseStage(stage);
    });

    this.proposalId = obj.proposalId;

  }
  saveTimeline() {
    this.preAwardService.updateTimeline(this.proposalId, this.timeline).subscribe((timeline) => {
      this.proposalService.updateTimeline(this.timeline);
      this.timeline = this.parseDates(timeline);
    });
  }

  // forms
  populateunSelectedForms() {
    this.unSelectedForms = this.preAwardForms.filter( preAwardForm => {
      return this.stage.requiredForms.findIndex(form => {
        return form.key === preAwardForm;
      }) == -1;
    });
  }
  handleAddForm(form) {
    this.stage.requiredForms.push({'key': form, 'value': null});
    this.populateunSelectedForms();
  }
  handleRemoveForm(form) {
    let index = this.stage.requiredForms.findIndex(reqForm => {
      return reqForm === form;
    });
    this.stage.requiredForms.splice(index, 1);
    // set unselectedForms
    this.populateunSelectedForms();
  }
  // files
  handleAddFile(fileName) {
    const duplicate = this.stage.requiredFiles.findIndex((file) => {
      return file.key === fileName;
    });
    if (duplicate !== -1) {
      // let the user know that its a duplicate
    } else {
      this.stage.requiredFiles.push({'key': fileName, 'value': null});
    }
  }
  handleRemoveFile(fileName) {
    let index = this.stage.requiredFiles.findIndex(reqFile => {
      return reqFile.key === fileName;
    });
    this.stage.requiredFiles.splice(index, 1);
  }
  // stage
  handleAddStage() {
    this.preAwardService.createStage(this.timeline.id).subscribe( (stage) => {
      this.stage = this.parseStage(stage);
      this.timeline.stages.push(stage);
      this.setDialogType('edit-stage');
    });
  }
  saveStage() {
    const stage = Object.assign({}, this.stage);
    stage.requiredForms = this.keysPipe.backToObject(stage.requiredForms);
    stage.requiredFiles = this.keysPipe.backToObject(stage.requiredFiles);
    this.preAwardService.saveStage(this.timeline.id, stage).subscribe( (savedStage) => {
      this.stage = this.parseStage(savedStage);
    });
  }
  sortStageIntoTimeline(indexToPush) {
    // find if the stage is already in the index
    const currentStageIndex = this.timeline.stages.findIndex( (stage) => {
      return this.stage == stage;
    });
    // new stage
    if (currentStageIndex === -1) {
      // make request to create stage and have working  id
      // inside of call back do all the below operations, update the new orders
      this.stage.stageOrder = this.timeline.stages[indexToPush].stageOrder;
      this.timeline.stages.forEach((stage, index, stages) => {
        if (index >= indexToPush) {
           stages[index].stageOrder = stages[index].stageOrder + 1;
        }
      });
      this.timeline.stages.splice(indexToPush, 0, this.stage);
    // the stage is already in the timeline
    } else {
      if (indexToPush === currentStageIndex || indexToPush === currentStageIndex + 1) {
      } else if (currentStageIndex < indexToPush) {
      // want to move the stage up in the timeline
        this.stage.stageOrder = this.timeline.stages[indexToPush].stageOrder;
        this.timeline.stages.forEach((stage, index, stages) => {
          if (index < indexToPush && index >= currentStageIndex) {
            stages[index].stageOrder = stages[index].stageOrder - 1;
          }
        });
        this.timeline.stages.splice(indexToPush, 0, this.stage);
        this.timeline.stages.splice(currentStageIndex, 1);
        // make the request here to save stage and all the orders
      } else {
      // want to move the stage down the timeline
        this.stage.stageOrder = this.timeline.stages[indexToPush].stageOrder;
        this.timeline.stages.forEach((stage, index, stages) => {
          if (index >= indexToPush && index < currentStageIndex) {
            stages[index].stageOrder = stages[index].stageOrder + 1;
          }
        });
        this.timeline.stages.splice(currentStageIndex, 1);
        this.timeline.stages.splice(indexToPush, 0, this.stage);
        // make the request here to save stage and all the orders
      }

    }
    // console.log(this.timeline.stages);
  }
  deleteStage() {
  // make delete request if successful, sort stage orders, update stage orders
    if (this.editingNewStage) {
      // make the request
    } else {
      const currentStageIndex = this.timeline.stages.findIndex( (stage) => {
        return this.stage == stage;
      });
      this.timeline.stages.forEach((stage, index, array) => {
        if (index > currentStageIndex) {
          array[index].stageOrder = array[index].stageOrder - 1;
        }
      });
      this.timeline.stages.splice(currentStageIndex,  1);
    }
  }
  // helper functions
  getCurrentStage(stageId) {
    const stageIndex = this.timeline.stages.findIndex((stage) => {
      return stage.id == stageId;
    });
    this.stage = this.timeline.stages[stageIndex];
    this.setDialogType('view-stage');
  }
  setDialogType(type) {
    this.dialogType = type;
    if (type === 'edit-stage') {
      this.populateunSelectedForms();
    }
  }
  // handle drag and drop for stage in a timeline
  drop(obj) {
    obj.event.preventDefault();
    this.sortStageIntoTimeline(obj.index);
  }
  // hover element over drop zone
  allowDrop(event) {
    event.preventDefault();
  }

  // parse Timeline dates
  parseDates(timeline) {
    if (timeline.uasDueDate !== null) {
      timeline.uasDueDate = new Date (timeline.uasDueDate)
    }
    if (timeline.sponsorDueDate !== null) {
      timeline.sponsorDueDate = new Date (timeline.sponsorDueDate)
    }
    if (timeline.finalSign !== null) {
      timeline.finalSign = new Date (timeline.finalSign)
    }
    return timeline;
  }
  parseStage(stage) {
    if (stage.expectedDate !== null) {
      stage.expectedDate = new Date (stage.expectedDate);
    }
    if (stage.completedDate !== null) {
      stage.completedDate = new Date (stage.completedDate);
    }
    stage.requiredForms = this.keysPipe.transform(stage.requiredForms);
    stage.requiredFiles = this.keysPipe.transform(stage.requiredFiles);
    return stage;
  }
}

