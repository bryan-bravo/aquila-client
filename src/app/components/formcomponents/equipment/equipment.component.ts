import { Component, OnInit } from '@angular/core';
import {EquipmentForm, TypeOfEquipment, MapEntry} from '../../../models/PreAward/EquipmentForm';
import { PreawardService } from '../../../services/preaward.service';
import {ProposalService} from '../../../services/proposal.service';
import {KeysPipe} from '../../../pipes/keys.pipe';

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
  mapEntry: MapEntry = new MapEntry();
  newMapEntry: boolean;
  displayType: string;
  displayDialog: boolean;
  constructor(private proposalService: ProposalService,
              private preAwardService: PreawardService,
              private keysPipe: KeysPipe
            ) {
  }

  ngOnInit() {
    this.index = 0;
    const equipmentObject = this.proposalService.getEquipmentForm();
   if (equipmentObject.equipmentForm.id == null) {
     this.preAwardService.getEquipment(equipmentObject.proposalId).subscribe(newEquipmentForm => {
      this.equipmentForm = newEquipmentForm;
     });
     } else {
       this.equipmentForm = this.parseEquipmentForm(equipmentObject.equipmentForm);
     }
     // make post request, set the response = this.equipmentForm,
  }
  // listens for index updates from form footer
  updateIndex(value) {
    this.index = value;
  }
 
  update() {
    // make copy of equipment form
    // change maps
     this.preAwardService.updateEquipment(this.equipmentForm).subscribe(newEquipment => {
      //  parse maps
      this.proposalService.updateEquipmentForm(this.equipmentForm);
     });
  }
  onRowSelect(event, type) {
    if (type === 'typeOfEquipment') {
      this.newTypeOfEquipment = false;
      this.typeOfEquipment = event.data;
    }
    if (type === 'chemical' || type === 'radiation') {
      this.newMapEntry = false;
      this.mapEntry = event.data;
    }
    this.displayType = type;
    this.displayDialog = true;
  }
  showDialogToAdd(type) {
    if (type === 'typeOfEquipment') {
      this.newTypeOfEquipment = true;
      this.typeOfEquipment = new TypeOfEquipment();
    }
    if (type === 'chemical' || type === 'radiation') {
      this.newMapEntry = true;
      this.mapEntry = new MapEntry();
    }
    this.displayType = type;
    this.displayDialog = true;
  }
  findIndex() {
    const type = this.displayType;
    if (type === 'typeOfEquipment') {
      return this.equipmentForm.typeOfEquipment.indexOf(this.typeOfEquipment);
    }
    if (type === 'chemical') {
      return this.equipmentForm.chemicals.indexOf(this.mapEntry);
    }
    if (type === 'radiation') {
      return this.equipmentForm.radiation.indexOf(this.mapEntry);
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
    if (type === 'chemical') {
      if (!this.mapEntry) {
        this.equipmentForm.chemicals = [];
      }
      const chemicalsList = [...this.equipmentForm.chemicals];
      if (this.newMapEntry) {
        chemicalsList.push(this.mapEntry);
      } else {
        chemicalsList[this.findIndex()] = this.mapEntry;
      }
      this.equipmentForm.chemicals = chemicalsList;
      console.log( this.equipmentForm.chemicals)

    }
    if (type === 'radiation') {
      if (!this.mapEntry) {
        this.equipmentForm.radiation = [];
      }
      const radiationList = [...this.equipmentForm.radiation];
      if (this.newMapEntry) {
        radiationList.push(this.mapEntry);
      } else {
        radiationList[this.findIndex()] = this.mapEntry;
      }
      this.equipmentForm.radiation = radiationList;
    }
    this.displayDialog = false;
  }
  delete() {
    const type = this.displayType;
    const index = this.findIndex();
    if (type === 'typeOfEquipment') {
      this.equipmentForm.typeOfEquipment = this.equipmentForm.typeOfEquipment.filter((val, i) => i !== index);
    }
    if (type === 'chemical') {
      this.equipmentForm.chemicals = this.equipmentForm.chemicals.filter((val, i) => i !== index);
    }
    if (type === 'radiation') {
      this.equipmentForm.radiation = this.equipmentForm.radiation.filter((val, i) => i !== index);
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
  parseEquipmentForm(equipmentForm) {
    equipmentForm.chemicals = this.keysPipe.transform(equipmentForm.chemicals);
    equipmentForm.radiation = this.keysPipe.transform(equipmentForm.radiation);
    return equipmentForm;
  }
}
