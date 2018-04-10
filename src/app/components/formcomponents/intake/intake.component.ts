import { Component, OnInit} from '@angular/core';
import {IntakeForm, Personnel, SubgrantSubProject, ProjectLocation} from '../../../models/PreAward/IntakeForm';
import { AdditionalParty, Space, RequestedEquipment, Hazard} from '../../../models/PreAward/IntakeForm';
import {MenuItem} from 'primeng/primeng';
import { Proposal } from '../../../models/PreAward/Proposal';
import {ProposalService} from '../../../services/proposal.service';
import {PreawardService} from '../../../services/preaward.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css']
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
  additionalParty: AdditionalParty = new AdditionalParty();
  newAdditionalParty: boolean;
  requestedEquipment: RequestedEquipment = new RequestedEquipment();
  newRequestedEquipment: boolean;
  space: Space = new Space();
  newSpace: boolean;
  hazard: Hazard = new Hazard();
  newHazard: boolean;

  constructor(private proposalService: ProposalService, private preAwardService: PreawardService ) {
    this.intakeForm = this.proposalService.getIntakeForm(); // ignore this at the moment make this into observable
    //If equipment is null create one and if not you're fine
   }

  ngOnInit() {
  this.index = 0;
  this.displayDialog = false;
  }
  // make into pipe
  setProgressBar(percentage) {
    const formattedWidth = percentage + '%';
    return {
      'height': '10px',
      'width': formattedWidth,
      'background-color': 'rgb(46, 236, 29)'
    };
  }
  updateIndex(value) {
   this.index = value;
  }

  update() {
    // make request.
    this.preAwardService.updateIntake(this.intakeForm).subscribe(newIntake => {
        this.intakeForm = newIntake;
        //send local intake back to parent
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
      this.additionalParty = new AdditionalParty();
    }
    if (type === 'space') {
      this.newSpace = true;
      this.space = new Space();
    }
    if (type === 'requestedequipment') {
      this.newRequestedEquipment = true;
      this.requestedEquipment = new RequestedEquipment();
    }
    if (type === 'hazard') {
      this.newHazard = true;
      this.hazard = new Hazard();
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
    if (type === 'requestedequipment') {
      this.newRequestedEquipment = false;
      this.requestedEquipment = event.data;
    }
    if (type === 'hazard') {
      this.newHazard = false;
      this.hazard = event.data;
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
      return this.intakeForm.requestedEquipment.indexOf(this.requestedEquipment);
    }
    if (type === 'hazard') {
      return this.intakeForm.hazardousSubstances.indexOf(this.hazard);
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
      if (this.newRequestedEquipment) {
        equipmentList.push(this.requestedEquipment);
      } else {
        equipmentList[this.findIndex()] = this.requestedEquipment;
      }
        this.intakeForm.requestedEquipment = equipmentList;
    }

    if (type === 'hazard') {
      if (!this.intakeForm.hazardousSubstances) {
        this.intakeForm.hazardousSubstances = [];
      }
      const hazardList = [... this.intakeForm.hazardousSubstances];
      if (this.newHazard) {
        hazardList.push(this.hazard);
      } else {
        hazardList[this.findIndex()] = this.hazard;
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
}
