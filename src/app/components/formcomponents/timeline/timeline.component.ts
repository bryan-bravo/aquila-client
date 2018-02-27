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
  // fills the timeline of component timeline
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
  // when a new form is added to a stage
  handleAddForm(formName) {
    this.stage.requiredForms.push(formName);
    this.populateunSelectedForms();
  }
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
  handleRemoveForm(formName) {
    let index = this.stage.requiredForms.findIndex(reqForm => {
      return reqForm === formName;
    });
    this.stage.requiredForms.splice(index, 1);
    // set unselectedForms
    this.populateunSelectedForms();
  }
  // delete a file
  handleRemoveFile(fileName) {
    let index = this.stage.requiredFiles.findIndex(reqFile => {
      return reqFile === fileName;
    });
    this.stage.requiredFiles.splice(index, 1);
    this.populateunSelectedForms();
  }
  // handle adding a stage
  handleAddStage() {
    // set stage to empty
    // display edit stage
    // show add button in edit div if type = new stage
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
}

