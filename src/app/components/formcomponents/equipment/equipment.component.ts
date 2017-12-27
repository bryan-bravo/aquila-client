import { Component, OnInit } from '@angular/core';
import {EquipmentForm} from '../../../models/PreAward/EquipmentForm';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentForm:EquipmentForm;
  constructor() { }

  ngOnInit() {
    this.equipmentForm = new EquipmentForm('1');
  }
  setProgressBar(percentage){
    let formattedWidth = percentage+'%';
    return{
      'height':'10px',
      'width':formattedWidth,
      'background-color':'rgb(46, 236, 29)'
    };   
  }
}
