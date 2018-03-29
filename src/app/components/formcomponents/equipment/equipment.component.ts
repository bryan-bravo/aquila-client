import { Component, OnInit } from '@angular/core';
import {EquipmentForm} from '../../../models/PreAward/EquipmentForm';
import { PreawardService } from '../../../services/preaward.service';
import {ProposalService} from '../../../services/proposal.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentForm: EquipmentForm;
  index: number;
  breadCrumbStrings: string[] = ['General Info', 'Equipment', 'Requirements'];

  constructor(private proposalServivce: ProposalService, private preAwardService: PreawardService) { 
    //this.equipmentForm = this.proposalServivce.getEquipmentForm();
    // console.log( this.equipmentForm)
  }

  ngOnInit() {
    this.index = 0;  
    
    //this.equipmentForm = new EquipmentForm('1'); /// need to change this
    let equipmentObject = this.proposalServivce.getEquipmentForm();
    console.log(equipmentObject)
   if(this.equipmentForm == undefined) {
    this.preAwardService.saveEquipmentForm(this.equipmentForm).subscribe(newEquipmentForm => {
    this.equipmentForm = newEquipmentForm;
    });
     //make post request, set the response = this.equipmentForm, 

    }
  }
  // listens for index updates from form footer
  updateIndex(value) {
    this.index = value;
   }
 
   update() {
     this.preAwardService.updateEquipment(this.equipmentForm).subscribe(newEquipment => {
       console.log(newEquipment)
       this.proposalServivce.updateEquipmentForm(this.equipmentForm);
     });
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
