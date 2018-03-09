import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {TimeLine, Stage, FileInfo} from '../../../models/PreAward/TimeLine';
import { MockDataService } from '../../../services/mock-data.service';
import { PreawardService } from '../../../services/preaward.service';
import { ProposalService } from '../../../services/proposal.service';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  timeline: TimeLine;
  proposalId: number;
  currentStageId: number; // for making requests
  stage: Stage; // stage to be manipulated for edit and new
  editingNewStage: boolean;
  dialogType: string; // view, edit/add
  preAwardForms: string[] =
  ['Intake', 'Equipment', 'Approval',
  'Conflict Of Interest Other Investigator/Key Personnel PHS',
  'Conflict Of Interest Other Investigator/Key Personnel NONPHS',
  'Conflict Of Interest Principal Investigator PHS',
  'Conflict Of Interest Principal Investigator NONPHS',
  'Statement Of Economic Interest',
 ];
 unSelectedForms: string[];
  constructor(private mockService: MockDataService,
              private preAwardService: PreawardService,
              private proposalService: ProposalService,
              private datePipe: DatePipe
    ) {
      this.populateTimeLine();
    }

  ngOnInit() {
    this.dialogType = 'view-basic-timeline';
  }
  // fills the timeline field
  populateTimeLine() {
  const obj = this.proposalService.getTimeline();
    this.timeline = this.parseDates(obj.timeline);
    this.proposalId = obj.proposalId;
  }
  // saves the timeline for basic timline fields
  saveTimeline() {
    this.preAwardService.updateTimeline(this.proposalId, this.timeline).subscribe((timeline) => {
      this.timeline = this.parseDates(timeline);
      console.log(this.timeline)
    });
  }
  // finds stage in list from timeline object
  getCurrentStage(stageId) {
    const stages = this.timeline.stages;
    this.stage = stages.find((element) => {
      return element.Id === stageId;
    });
    this.setDialogType('view-stage');
  }

  // filters the forms in a stage from preAwardForms to selectedForms
  populateunSelectedForms() {
    this.unSelectedForms = this.preAwardForms.filter( preAwardForm => {
      return !this.stage.requiredForms.includes(preAwardForm);
    });
  }
  // edit required forms of a stage
  handleAddForm(formName) {
    this.stage.requiredForms.push(formName);
    this.populateunSelectedForms();
  }
  // edit required files of a stage
  handleAddFile(fileName) {
    const duplicate = this.stage.requiredFiles.findIndex((file) => {
      return file === fileName;
    });
    if (duplicate !== -1) {
      // let the user know that its a duplicate
    } else {
      this.stage.requiredFiles.push(fileName);
    }
  }
  // edit required forms of a stage
  handleRemoveForm(formName) {
    let index = this.stage.requiredForms.findIndex(reqForm => {
      return reqForm === formName;
    });
    this.stage.requiredForms.splice(index, 1);
    // set unselectedForms
    this.populateunSelectedForms();
  }
  // edit required forms of a stage
  handleRemoveFile(fileName) {
    let index = this.stage.requiredFiles.findIndex(reqFile => {
      return reqFile === fileName;
    });
    this.stage.requiredFiles.splice(index, 1);
    this.populateunSelectedForms();
  }
  // user wants to create a new stage
  handleAddStage() {
    this.preAwardService.createStage(this.timeline.id).subscribe( (stage) => {
      this.stage = stage;
      this.stage.requiredForms = []; // will change
      this.stage.requiredFiles = []; // will change
      this.setDialogType('edit-stage');
      // this.setdisplayDialog(true);
    });
  }
  // save a stage
  saveStage() {
    // make request to save
  }
  // finding where to insert the stage in the timeline stage array
  sortStageIntoTimeline(indexToPush) {
    // find if the stage is already in the index
    const currentStageIndex = this.timeline.stages.findIndex( (stage) => {
      return this.stage == stage;
    });
    // new stage
    if (currentStageIndex === -1) {
      // make request to create stage and have working id
      // inside of call back do all the below operations, update the new orders
      this.stage.order = this.timeline.stages[indexToPush].order;
      this.timeline.stages.forEach((stage, index, stages) => {
        if (index >= indexToPush) {
           stages[index].order = stages[index].order + 1;
        }
      });
      this.timeline.stages.splice(indexToPush, 0, this.stage);
    // the stage is already in the timeline
    } else {
      if (indexToPush === currentStageIndex || indexToPush === currentStageIndex + 1) {
      } else if (currentStageIndex < indexToPush) {
      // want to move the stage up in the timeline
        this.stage.order = this.timeline.stages[indexToPush].order;
        this.timeline.stages.forEach((stage, index, stages) => {
          if (index < indexToPush && index >= currentStageIndex) {
            stages[index].order = stages[index].order - 1;
          }
        });
        this.timeline.stages.splice(indexToPush, 0, this.stage);
        this.timeline.stages.splice(currentStageIndex, 1);
        // make the request here to save stage and all the orders
      } else {
      // want to move the stage down the timeline
        this.stage.order = this.timeline.stages[indexToPush].order;
        this.timeline.stages.forEach((stage, index, stages) => {
          if (index >= indexToPush && index < currentStageIndex) {
            stages[index].order = stages[index].order + 1;
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
          array[index].order = array[index].order - 1;
        }
      });
      this.timeline.stages.splice(currentStageIndex,  1);
    }
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
   // responds to a timeline stage being clicked
   setCurrentStageId(id) {
    this.getCurrentStage(id);
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
    console.log(timeline)
    return timeline;
  }
}

