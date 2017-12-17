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
  index:number;
  constructor() { }

  ngOnInit() {
  this.index=0;
  }
  setProgressBar(percentage){
    let formattedWidth = percentage+'%';
    return{
      'height':'10px',
      'width':formattedWidth,
      'background-color':'rgb(46, 236, 29)'
    };   
  }
  changeIndex(direction){    
    if(direction=='left')
    this.index=this.index-1;
    if(direction=='right')
    this.index=this.index+1;
  }
}
 