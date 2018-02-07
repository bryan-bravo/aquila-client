import { Component, OnInit } from '@angular/core';
import {TimeLine, Stage} from '../../../models/PreAward/TimeLine';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  timeline: TimeLine;
  currentStageId: number;
  stage: Stage;
  displayDialog: boolean;
  dialogType: string;
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
    let stages = this.timeline.stages;
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
  setDialogType(type) {
    this.dialogType = type;
  }
  setdisplayDialog(bool) {
    this.displayDialog = bool;
  }
}

