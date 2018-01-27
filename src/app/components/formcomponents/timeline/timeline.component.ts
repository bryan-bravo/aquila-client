import { Component, OnInit } from '@angular/core';
import {TimeLine} from '../../../models/PreAward/TimeLine';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  timeline: TimeLine;
  constructor(private mockService: MockDataService) { }

  ngOnInit() {
    this.populateTimeLine();
  }
  // fills the timeline of component timeline
  populateTimeLine() {
     this.mockService.getTimeLine().subscribe( timeline => {
      this.timeline = timeline;
      console.log(this.timeline);
    });

  }
}
