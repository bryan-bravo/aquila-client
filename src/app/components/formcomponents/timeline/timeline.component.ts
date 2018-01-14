import { Component, OnInit } from '@angular/core';
import {TimeLine} from '../../../models/PreAward/TimeLine';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  timeline: TimeLine;
  constructor() { }

  ngOnInit() {
  }

}
