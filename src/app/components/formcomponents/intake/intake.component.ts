import { Component, OnInit} from '@angular/core';
import {IntakeForm, Personnel, SubgrantSubProject, ProjectLocation} from '../../../models/PreAward/IntakeForm';
import { AdditionalPartiesInvolved, Space, MapEntry} from '../../../models/PreAward/IntakeForm';
import {trigger, state, transition, style, animate} from '@angular/animations';
import {MenuItem} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';
import { Proposal } from '../../../models/PreAward/Proposal';
import {ProposalService} from '../../../services/proposal.service';
import {PreawardService} from '../../../services/preaward.service';
import { Subscription } from 'rxjs/Subscription';
import {KeysPipe} from '../../../pipes/keys.pipe';

@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css'],
  animations: [
    trigger('slideHorizontal', [
      // right arrow clicked entering
      transition(':enter', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate(500,
          style({
            transform: 'translateX(0)'
          })
        )
      ]),
      // right arrow clicked leaving
      transition(':leave', [
        animate(500,
          style({
            transform: 'translateX(-100%)'
          })
        )
      ])
    ])
  ]
})
export class IntakeComponent implements OnInit {
  intakeForm: IntakeForm;
  index: number;
  breadCrumbStrings: string[] = ['General Info', 'Participation', 'Compliances', 'Other'];
  // CRUD stuff
  displayDialog: boolean;
  intakeInnerClass: string;
  personnel: Personnel = new Personnel();
  newPersonnel: boolean;
  subgrantSubProject: SubgrantSubProject = new SubgrantSubProject();
  newSubgrantSubProject: boolean;
  projectLocation: ProjectLocation = new ProjectLocation();
  newProjectLocation: boolean;
  additionalParty: AdditionalPartiesInvolved = new AdditionalPartiesInvolved();
  newAdditionalParty: boolean;
  mapEntry: MapEntry = new MapEntry();
  newMapEntry: boolean;
  space: Space = new Space();
  newSpace: boolean;
  constructor(
    private proposalService: ProposalService,
    private preAwardService: PreawardService,
    private messageService: MessageService,
    private keysPipe: KeysPipe
  ) {
    this.intakeForm = this.parseIntake(this.proposalService.getIntakeForm()); // ignore this at the moment make this into observable
    }

  ngOnInit() {
  this.index = 0;
  this.displayDialog = false;
  }

  updateIndex(value) {
   this.index = value;
  }

  update() {
    const intakeFormCopy = Object.assign({}, this.intakeForm);
    intakeFormCopy.requestedEquipment = this.keysPipe.backToObject(intakeFormCopy.requestedEquipment);
    intakeFormCopy.hazardousSubstances = this.keysPipe.backToObject(intakeFormCopy.hazardousSubstances);
    this.preAwardService.updateIntake(intakeFormCopy).subscribe(newIntake => {
        this.intakeForm = this.parseIntake(newIntake);
        this.intakeForm.proposalId = intakeFormCopy.proposalId;
        this.messageService.add({severity: 'success', summary: 'Changes Saved'});
        this.proposalService.updateIntakeForm(this.intakeForm);
    });

  }
  // when add is clicked on any datatable
  showDialogToAdd(type) {
    if (type === 'personnel') {
      this.newPersonnel = true;
      this.personnel = new Personnel();
    }
    if (type === 'subgrantsubcontract') {
      this.newSubgrantSubProject = true;
      this.subgrantSubProject = new SubgrantSubProject();
    }
    if (type === 'projectlocation') {
      this.newProjectLocation = true;
      this.projectLocation = new ProjectLocation();
    }
    if (type === 'additionalparty') {
      this.newAdditionalParty = true;
      this.additionalParty = new AdditionalPartiesInvolved();
    }
    if (type === 'space') {
      this.newSpace = true;
      this.space = new Space();
    }
    if (type === 'requestedequipment' || type === 'hazard') {
      this.newMapEntry = true;
      this.mapEntry = new MapEntry();
    }

    this.intakeInnerClass = type;
    this.displayDialog = true;
  }
  // when a data entry in data table is clicked
  onRowSelect(event, type) {
    if (type === 'personnel') {
      this.newPersonnel = false;
      this.personnel = event.data;
    }
    if (type === 'subgrantsubcontract') {
      this.newSubgrantSubProject = false;
      this.subgrantSubProject = event.data;
    }
    if (type === 'projectlocation') {
      this.newProjectLocation = false;
      this.projectLocation = event.data;
    }
    if (type === 'additionalparty') {
      this.newAdditionalParty = false;
      this.additionalParty = event.data;
    }
    if (type === 'space') {
      this.newSpace = false;
      this.space = event.data;
    }
    if (type === 'requestedequipment' || type === 'hazard') {
      this.newMapEntry = false;
      this.mapEntry = event.data;
    }
      this.intakeInnerClass = type;
      this.displayDialog = true;
  }
 // finds the index in its array, of the selected object in a data table
  findIndex(): number {
    const type = this.intakeInnerClass;
    if (type === 'personnel') {
      return this.intakeForm.personnel.indexOf(this.personnel);
    }
    if (type === 'subgrantsubcontract') {
      return this.intakeForm.subgrantsOrSubcontracts.indexOf(this.subgrantSubProject);
    }
    if (type === 'projectlocation') {
      return this.intakeForm.projectLocations.indexOf(this.projectLocation);
    }
    if (type === 'additionalparty') {
      return this.intakeForm.additionalPartiesInvolved.indexOf(this.additionalParty);
    }
    if (type === 'space') {
      return this.intakeForm.space.indexOf(this.space);
    }
    if (type === 'requestedequipment') {
      return this.intakeForm.requestedEquipment.indexOf(this.mapEntry);
    }
    if (type === 'hazard') {
      return this.intakeForm.hazardousSubstances.indexOf(this.mapEntry);
    }
  }
 // save new CRUD element
  save() {
    const type = this.intakeInnerClass;
    if (type === 'personnel') {
      if (!this.intakeForm.personnel) {
        this.intakeForm.personnel = [];
      }
      const personnelList = [...this.intakeForm.personnel];
      if (this.newPersonnel) {
        personnelList.push(this.personnel);
      } else {
        personnelList[this.findIndex()] = this.personnel;
      }
      this.intakeForm.personnel = personnelList;
    }

    if (type === 'subgrantsubcontract') {
      if (!this.intakeForm.subgrantsOrSubcontracts) {
        this.intakeForm.subgrantsOrSubcontracts = [];
      }
      const subGrantSubProjectList = [...this.intakeForm.subgrantsOrSubcontracts];
      if (this.newSubgrantSubProject) {
        subGrantSubProjectList.push(this.subgrantSubProject);
      } else {
        subGrantSubProjectList[this.findIndex()] = this.subgrantSubProject;
      }
      this.intakeForm.subgrantsOrSubcontracts = subGrantSubProjectList;
     }

    if ( type === 'projectlocation') {
      if (!this.intakeForm.projectLocations) {
        this.intakeForm.projectLocations = [];
      }
      const projectLocationList = [... this.intakeForm.projectLocations];
      if (this.newProjectLocation) {
        projectLocationList.push(this.projectLocation);
      } else {
        projectLocationList[this.findIndex()] = this.projectLocation;
      }
      this.intakeForm.projectLocations = projectLocationList;
     }

    if (type === 'additionalparty') {
      if (!this.intakeForm.additionalPartiesInvolved) {
        this.intakeForm.additionalPartiesInvolved = [];
      }
      const additionalPartyList = [... this.intakeForm.additionalPartiesInvolved];
      if (this.newAdditionalParty) {
        additionalPartyList.push(this.additionalParty);
      } else {
        additionalPartyList[this.findIndex()] = this.additionalParty;
      }
      this.intakeForm.additionalPartiesInvolved = additionalPartyList;
    }

    if (type === 'space') {
      if (!this.intakeForm.space) {
        this.intakeForm.space = [];
      }
      const spaceList = [... this.intakeForm.space];
      if (this.newSpace) {
        spaceList.push(this.space);
      } else {
        spaceList[this.findIndex()] = this.space;
      }
      this.intakeForm.space = spaceList;
    }

    if (type === 'requestedequipment') {
      if (!this.intakeForm.requestedEquipment) {
        this.intakeForm.requestedEquipment = [];
      }
      const equipmentList = [... this.intakeForm.requestedEquipment];
      if (this.newMapEntry) {
        equipmentList.push(this.mapEntry);
      } else {
        equipmentList[this.findIndex()] = this.mapEntry;
      }
        this.intakeForm.requestedEquipment = equipmentList;
    }

    if (type === 'hazard') {
      if (!this.intakeForm.hazardousSubstances) {
        this.intakeForm.hazardousSubstances = [];
      }
      const hazardList = [... this.intakeForm.hazardousSubstances];
      if (this.newMapEntry) {
        hazardList.push(this.mapEntry);
      } else {
        hazardList[this.findIndex()] = this.mapEntry;
      }
      this.intakeForm.hazardousSubstances = hazardList;
    }
    // reset
    this.displayDialog = false;
  }
  // delete a CRUD element
  delete() {
    const type = this.intakeInnerClass;
    const index = this.findIndex();
    if (type === 'personnel') {
      this.intakeForm.personnel = this.intakeForm.personnel.filter((val, i) => i !== index);
    }
    if (type === 'subgrantsubcontract') {
      this.intakeForm.subgrantsOrSubcontracts = this.intakeForm.subgrantsOrSubcontracts.filter((val, i) => i !== index);
    }
    if (type === 'projectlocation') {
      this.intakeForm.projectLocations = this.intakeForm.projectLocations.filter((val, i) => i !== index);
    }
    if (type === 'additionalparty') {
      this.intakeForm.additionalPartiesInvolved = this.intakeForm.additionalPartiesInvolved.filter((val, i) => i !== index);
    }
    if (type === 'space') {
      this.intakeForm.space = this.intakeForm.space.filter((val, i) => i !== index);
    }
    if (type === 'requestedequipment') {
      this.intakeForm.requestedEquipment = this.intakeForm.requestedEquipment.filter((val, i) => i !== index);
    }
    if (type === 'hazard') {
      this.intakeForm.hazardousSubstances = this.intakeForm.hazardousSubstances.filter((val, i) => i !== index);
    }
    this.displayDialog = false;
  }
  // convert requiestedEwuipment and hazardous substances maps to arrays, ceck if has already been converted
  parseIntake(intakeForm) {
    if (intakeForm.requestedEquipment.length == undefined) {
      intakeForm.requestedEquipment = this.keysPipe.transform(intakeForm.requestedEquipment);
      intakeForm.hazardousSubstances = this.keysPipe.transform(intakeForm.hazardousSubstances);
      if (intakeForm.startDate !== null) {
        intakeForm.startDate = new Date(intakeForm.startDate);
      }
      if (intakeForm.endDate !== null) {
        intakeForm.endDate = new Date(intakeForm.endDate);
      }
    } else {
      this.intakeForm = intakeForm;
     }

    return intakeForm;
  }
}
