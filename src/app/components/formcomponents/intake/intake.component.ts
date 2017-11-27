import { Component, OnInit } from '@angular/core';
import {IntakeForm} from '../../../models/PreAward/IntakeForm';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css']
})
export class IntakeComponent implements OnInit {
  intakeForm:IntakeForm;
  items: MenuItem[];
  
  constructor() { }

  ngOnInit() {
this.populateMenuItems();
  }
populateMenuItems(){
  this.items = [
    {label: 'Step 1'},
    {label: 'Step 2'},
    {label: 'Step 3'}
];
}
}
