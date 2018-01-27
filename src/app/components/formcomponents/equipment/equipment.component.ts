import { Component, OnInit } from '@angular/core';
import {EquipmentForm} from '../../../models/PreAward/EquipmentForm';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentForm: EquipmentForm;
  index: number;
  breadCrumbStrings: string[] = ['General Info', 'Equipment', 'Requirements'];

  constructor() { }

  ngOnInit() {
    this.index = 0;
    this.equipmentForm = new EquipmentForm('1');
  }
  // listens for index updates from form footer
  updateIndex(value) {
    this.index = value;
   }
  setProgressBar(percentage) {
    const formattedWidth = percentage + '%';
    return{
      'height':'10px',
      'width':formattedWidth,
      'background-color':'rgb(46, 236, 29)'
    };
  }

}
