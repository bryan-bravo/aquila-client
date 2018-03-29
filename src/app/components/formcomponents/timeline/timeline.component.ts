import { Component, OnInit } from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

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
  stageIndex: number;
  editingNewStage: boolean;
  dragging: boolean;
  draggingOverTimeline: boolean;
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
    this.dragging = false;
    this.draggingOverTimeline = false;
    this.proposalId = obj.proposalId;

  }
  saveTimeline() {
    if (this.timeline.stages.length === 1) {
      // have to parse the pre meeting stages, req forms and files
      const timelineCopy = Object.assign({}, this.timeline);
        timelineCopy.stages[0].requiredForms = this.keysPipe.backToObject(timelineCopy.stages[0].requiredForms);
        timelineCopy.stages[0].requiredFiles = this.keysPipe.backToObject(timelineCopy.stages[0].requiredFiles)
      this.preAwardService.putTimeline(this.proposalId, timelineCopy).subscribe( timeline => {
        timeline = this.parseDates(timeline);
        timeline.stages.forEach((stage, i, stages) => {
            stages[i] = this.parseStage(stage);
        });
        this.timeline = timeline;
      });
    } else {
      // making patch request
      this.preAwardService.patchTimeline(this.proposalId, this.timeline).subscribe(timeline => {
        this.timeline.fundingAgency = timeline.fundingAgency;
        if (timeline.uasDueDate) {
          this.timeline.uasDueDate = new Date(timeline.uasDueDate);
        } else {
          this.timeline.uasDueDate = timeline.uasDueDate;
        }        if (timeline.sponsorDueDate) {
          this.timeline.sponsorDueDate = new Date(timeline.sponsorDueDate);
        } else {
          this.timeline.sponsorDueDate = timeline.sponsorDueDate;
        }
        if (timeline.finalSign) {
          this.timeline.finalSign = new Date(timeline.finalSign);
        } else {
          this.timeline.finalSign = timeline.finalSign;
        }
      });
    }
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
    stage.stageOrder = this.getStageIndex(this.stage.id);
    this.preAwardService.saveStage(this.timeline.id, stage).subscribe( (savedStage) => {
      this.stage = this.parseStage(savedStage);
    });
  }
  sortStageIntoTimeline(indexToPush) {
    const currentStageIndex = this.stageIndex;
    if (indexToPush !== currentStageIndex || indexToPush !== currentStageIndex + 1){
      this.preAwardService.reorderStage(this.stage.id, indexToPush).subscribe( response => {
       if (indexToPush === 0) {
          this.timeline.stages.splice(currentStageIndex, 1);
          this.timeline.stages.unshift(this.stage);
        } else if (indexToPush == this.timeline.stages.length) {
          this.timeline.stages.splice(currentStageIndex, 1);
          this.timeline.stages.unshift(this.stage);
        } else {
          this.timeline.stages.splice(currentStageIndex, 1);
          this.timeline.stages.splice(indexToPush, 0, this.stage);
        }
        this.stageIndex = this.getStageIndex(this.stage.id);
        this.stage.stageOrder = this.stageIndex;
      });
    }
  }
  deleteStage() {
    // make delete request if successful, sort stage orders, update stage orders
      this.preAwardService.deleteStage(this.stage.id).subscribe( response => {
        // if successful
        const currentStageIndex = this.timeline.stages.findIndex( (stage) => {
          return this.stage == stage;
        });
        this.timeline.stages.splice(currentStageIndex,  1);
        this.setDialogType('view-basic-timeline');  
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

  // helper functions
  getCurrentStage(stageId) {
    const stageIndex = this.getStageIndex(stageId);
    this.stage = this.timeline.stages[stageIndex];
    this.stageIndex = stageIndex;
    this.setDialogType('view-stage');
  }
  getStageIndex(stageId) {
    const stageIndex = this.timeline.stages.findIndex((stage) => {
      return stage.id == stageId;
    });
    return stageIndex;
  }
  setDialogType(type) {
    this.dialogType = type;
    if (type === 'edit-stage') {
      this.populateunSelectedForms();
    } else if (type === 'view-basic-timeline') {
      this.stageIndex = null;
    }
  }
  setDragging(value) {
    this.dragging = value;
  }
  setDragOverTimeline(value) {
    // to
    console.log(value)
    this.draggingOverTimeline = value;
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

