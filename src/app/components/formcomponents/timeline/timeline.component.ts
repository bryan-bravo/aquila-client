import { Component, OnInit } from '@angular/core';
import {TimeLine, Stage, FileInfo} from '../../../models/PreAward/TimeLine';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  timeline: TimeLine;
  currentStageId: number; // for making requests
  stage: Stage; // stage to be manipulated for edit and new
  editingNewStage: boolean;
  displayDialog: boolean;
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
  constructor(private mockService: MockDataService) { }

  ngOnInit() {
    this.populateTimeLine();
  }
  // fills the timeline field
  populateTimeLine() {
     this.mockService.getTimeLine().subscribe( timeline => {
      this.timeline = timeline;
    });
  }
  // finds stage in list from timeline object
  getCurrentStage(stageId) {
    const stages = this.timeline.stages;
    this.stage = stages.find((element) => {
      return element.Id === stageId;
    });
    this.setDialogType('view');
    this.setdisplayDialog(true);
  }
  // responds to a timeline stage being clicked
  setCurrentStageId(id) {
    this.getCurrentStage(id);
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
    // set stage to empty
    this.stage = new Stage();
    // display edit stage
    this.stage.requiredForms = []; // will change
    this.stage.requiredFiles = []; // will change
    this.editingNewStage = true;
    this.setDialogType('edit');
    this.setdisplayDialog(true);
    // show add button in edit div if type = new stage
  }
  // save a stage
  saveStage() {

  }
  // finding where to insert the stage in the timeline stage array
  sortStageIntoTimeline(indexToPush) {
    // find if the stage is already in the index
    const currentStageIndex = this.timeline.stages.findIndex( (stage) => {
      return this.stage == stage;
    });
    // new stage
    if (currentStageIndex === -1) {
      this.stage.order = this.timeline.stages[indexToPush].order;
      this.timeline.stages.forEach((stage, index, stages) => {
        if (index >= indexToPush) {
           stages[index].order = stages[index].order + 1;
        }
      });
      this.timeline.stages.splice(indexToPush, 0, this.stage);
    // the stage is already in the timeline
    } else {
      // current stage is dropped in adjacent bar
      if (indexToPush === currentStageIndex || indexToPush === currentStageIndex + 1) {
      } else if (currentStageIndex < indexToPush) {
        // want to move the stage further up in the timeline
        this.stage.order = this.timeline.stages[indexToPush].order;
        this.timeline.stages.forEach((stage, index, stages) => {
          if (index < indexToPush && index >= currentStageIndex) {
            stages[index].order = stages[index].order - 1;
          }
        });
        this.timeline.stages.splice(indexToPush, 0, this.stage);
        this.timeline.stages.splice(currentStageIndex, 1);

      } else {
        // want to move the stage further down the timeline
      }

    }
    console.log(this.timeline.stages);
  }
  setDialogType(type) {
    this.dialogType = type;
    if (type === 'edit') {
      this.populateunSelectedForms();
    }
  }
  setdisplayDialog(bool) {
    this.displayDialog = bool;
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
}

