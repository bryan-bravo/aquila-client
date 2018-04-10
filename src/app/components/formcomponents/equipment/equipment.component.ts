import { Component, OnInit } from '@angular/core';
import {EquipmentForm, TypeOfEquipment} from '../../../models/PreAward/EquipmentForm';
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
  typeOfEquipment: TypeOfEquipment = new TypeOfEquipment();
  newTypeOfEquipment: boolean;
  displayType: string;
  displayDialog: boolean;
  constructor(private proposalService: ProposalService, private preAwardService: PreawardService) {
  }

  ngOnInit() {
    this.index = 0;
    const equipmentObject = this.proposalService.getEquipmentForm();
    console.log(equipmentObject)
   if (equipmentObject.equipmentForm.id == null) {
     this.preAwardService.getEquipment(equipmentObject.proposalId).subscribe(newEquipmentForm => {
      this.equipmentForm = newEquipmentForm;
     });
     } else {
       this.equipmentForm = equipmentObject.equipmentForm;
     }
     // make post request, set the response = this.equipmentForm,
  }
  // listens for index updates from form footer
  updateIndex(value) {
    this.index = value;
  }
 
  update() {
     this.preAwardService.updateEquipment(this.equipmentForm).subscribe(newEquipment => {
       this.proposalService.updateEquipmentForm(this.equipmentForm);
     });
  }
  onRowSelect(event, type) {
    if (type === 'typeOfEquipment') {
      this.newTypeOfEquipment = false;
      this.typeOfEquipment = event.data;
    }
    this.displayType = type;
    this.displayDialog = true;
  }
  showDialogToAdd(type) {
    if (type === 'typeOfEquipment') {
      this.newTypeOfEquipment = true;
      this.typeOfEquipment = new TypeOfEquipment();
    }
    this.displayType = type;
    this.displayDialog = true;
  }
  findIndex() {
    const type = this.displayType;
    if (type === 'typeOfEquipment') {
      return this.equipmentForm.typeOfEquipment.indexOf(this.typeOfEquipment);
    }
  }
  save() {
    const type = this.displayType;
    if (type === 'typeOfEquipment') {
      if (!this.equipmentForm.typeOfEquipment) {
        this.equipmentForm.typeOfEquipment = [];
      }
      const typeOfEquipmentList = [...this.equipmentForm.typeOfEquipment];
      if (this.newTypeOfEquipment) {
        typeOfEquipmentList.push(this.typeOfEquipment);
      } else {
        typeOfEquipmentList[this.findIndex()] = this.typeOfEquipment;
      }
      this.equipmentForm.typeOfEquipment = typeOfEquipmentList;
    }
    this.displayDialog = false;
  }
  delete() {
    const type = this.displayType;
    const index = this.findIndex();
    if(type === 'typeOfEquipment') {
      this.equipmentForm.typeOfEquipment = this.equipmentForm.typeOfEquipment.filter((val, i) => i !== index);
    }
    this.displayDialog = false;
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
