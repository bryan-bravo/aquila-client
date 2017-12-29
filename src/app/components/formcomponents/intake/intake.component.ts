import { Component, OnInit} from '@angular/core';
import {IntakeForm,Personnel,SubgrantSubProject,ProjectLocation, AdditionalParty,Space,RequestedEquipment,Hazard} from '../../../models/PreAward/IntakeForm';
import {MenuItem} from 'primeng/primeng';
import { Proposal } from '../../../models/PreAward/Proposal';
import {ProposalService} from '../../../services/proposal.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css']
})
export class IntakeComponent implements OnInit {
  intakeForm:IntakeForm;  
  index:number;
  breadCrumbStrings: string[] = ['General Info','Participation','Compliances','Other'];
  //CRUD stuff
  displayDialog:boolean;
  intakeInnerClass:string;
  personnel:Personnel = new Personnel();
  newPersonnel:boolean;
  subgrantSubProject:SubgrantSubProject = new SubgrantSubProject();
  newSubgrantSubProject:boolean;
  projectLocation: ProjectLocation = new ProjectLocation();
  newProjectLocation:boolean;
  additionalParty:AdditionalParty = new AdditionalParty();
  newAdditionalParty:boolean;
  requestedEquipment: RequestedEquipment = new RequestedEquipment();
  newRequestedEquipment:boolean;
  space:Space =new Space();
  newSpace:boolean;
  hazard:Hazard = new Hazard();
  newHazard:boolean;

  constructor(private proposalService: ProposalService) {
    this.intakeForm = this.proposalService.getIntakeForm();//make this into observable
   }

  ngOnInit() {
  this.index=0;
  this.displayDialog=false;
  }
  //make into pipe
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

  update(){
    //make request
    this.proposalService.updateIntakeForm(this.intakeForm);
  }
  //when add is clicked on any datatable
  showDialogToAdd(type){
    if(type=='personnel'){  
      this.newPersonnel=true;
      this.personnel=new Personnel();
    }
    if(type=='subgrantsubcontract'){
      this.newSubgrantSubProject=true;
      this.subgrantSubProject=new SubgrantSubProject();
    }
    if(type=='projectlocation'){
      this.newProjectLocation=true;
      this.projectLocation = new ProjectLocation();
    }
    if(type=='additionalparty'){
      this.newAdditionalParty=true;
      this.additionalParty = new AdditionalParty();
    }
    if(type=='space'){
      this.newSpace=true;
      this.space = new Space();
    }
    if(type=='requestedequipment'){
      this.newRequestedEquipment=true;
      this.requestedEquipment= new RequestedEquipment();
    }
    if(type=='hazard'){
      this.newHazard=true;
      this.hazard = new Hazard();
    }
    this.intakeInnerClass=type;
    this.displayDialog=true;
  }
  //when a data entry in data table is clicked
  onRowSelect(event,type) {
    if(type=='personnel'){  
      this.newPersonnel = false;
      this.personnel=event.data;
    }
    if(type=='subgrantsubcontract'){
      this.newSubgrantSubProject=false;
      this.subgrantSubProject=event.data;
    }
    if(type=='projectlocation'){
    this.newProjectLocation=false;
    this.projectLocation=event.data;
    }
    if(type=='additionalparty'){
      this.newAdditionalParty=false;
      this.additionalParty = event.data
    }
    if(type=='space'){
      this.newSpace=false;
      this.space= event.data;
    }
    if(type=='requestedequipment'){
      this.newRequestedEquipment=false;
      this.requestedEquipment=event.data;
    }
    if(type=='hazard'){
      this.newHazard=false;
      this.hazard = event.data;
    }
      this.intakeInnerClass=type;
      this.displayDialog = true;
  }
 //finds the index in its array, of the selected object in a data table
  findIndex(): number {
    let type=this.intakeInnerClass;
    if(type=='personnel')  
      return this.intakeForm.personnel.indexOf(this.personnel);
    if(type=='subgrantsubcontract')
      return this.intakeForm.subGrantsOrSubContracts.indexOf(this.subgrantSubProject);
    if(type=='projectlocation')
      return this.intakeForm.projectLocations.indexOf(this.projectLocation);
    if(type=='additionalparty')
      return this.intakeForm.additionalInvolvedParties.indexOf(this.additionalParty);
    if(type=='space')
      return this.intakeForm.spaces.indexOf(this.space);
    if(type=='requestedequipment')
      return this.intakeForm.requestedEquipment.indexOf(this.requestedEquipment);
    if(type=='hazard')
      return this.intakeForm.hazardousSubstances.indexOf(this.hazard);
  }
 //save new CRUD element
  save() {
    let type=this.intakeInnerClass;
    if(type=='personnel'){ 
      if(!this.intakeForm.personnel)
        this.intakeForm.personnel=[];
      let personnelList = [...this.intakeForm.personnel];

      if(this.newPersonnel)
          personnelList.push(this.personnel);
      else
          personnelList[this.findIndex()] = this.personnel;
      this.intakeForm.personnel = personnelList;
    }

    if(type=='subgrantsubcontract'){
      if(!this.intakeForm.subGrantsOrSubContracts)
        this.intakeForm.subGrantsOrSubContracts=[];
      let subGrantSubProjectList = [...this.intakeForm.subGrantsOrSubContracts];
      if(this.newSubgrantSubProject)
        subGrantSubProjectList.push(this.subgrantSubProject);
      else
        subGrantSubProjectList[this.findIndex()] = this.subgrantSubProject;
      this.intakeForm.subGrantsOrSubContracts = subGrantSubProjectList;
     }

    if(type=='projectlocation'){
      if(!this.intakeForm.projectLocations)
        this.intakeForm.projectLocations=[];
      let projectLocationList = [... this.intakeForm.projectLocations];
      if(this.newProjectLocation)
        projectLocationList.push(this.projectLocation)
      else
        projectLocationList[this.findIndex()]=this.projectLocation;
      this.intakeForm.projectLocations = projectLocationList;
     }

    if(type=='additionalparty'){
      if(!this.intakeForm.additionalInvolvedParties)
        this.intakeForm.additionalInvolvedParties=[];
      let additionalPartyList =[... this.intakeForm.additionalInvolvedParties];
      if(this.newAdditionalParty)
        additionalPartyList.push(this.additionalParty);
      else
        additionalPartyList[this.findIndex()] = this.additionalParty;
        this.intakeForm.additionalInvolvedParties=additionalPartyList;
    }

    if(type=='space'){
      if(!this.intakeForm.spaces)
        this.intakeForm.spaces=[];
      let spaceList=[... this.intakeForm.spaces];
      if(this.newSpace)
        spaceList.push(this.space);
      else
        spaceList[this.findIndex()] = this.space;
      this.intakeForm.spaces = spaceList;  
    }

    if(type=='requestedequipment'){
      if(!this.intakeForm.requestedEquipment)
        this.intakeForm.requestedEquipment=[];
      let equipmentList =[... this.intakeForm.requestedEquipment];
      if(this.newRequestedEquipment)
        equipmentList.push(this.requestedEquipment);
      else
        equipmentList[this.findIndex()] =this.requestedEquipment;
        this.intakeForm.requestedEquipment = equipmentList;
    }
    
    if(type=='hazard'){
      if(!this.intakeForm.hazardousSubstances)
        this.intakeForm.hazardousSubstances=[];
      let hazardList =[... this.intakeForm.hazardousSubstances];
      if(this.newHazard)
        hazardList.push(this.hazard);
      else
        hazardList[this.findIndex()] = this.hazard;
      this.intakeForm.hazardousSubstances = hazardList;  
    }
    //reset  
    this.displayDialog = false;
  }
  //delete a CRUD element
  delete() {
    let type=this.intakeInnerClass;
    let index = this.findIndex();
    if(type=='personnel')
      this.intakeForm.personnel = this.intakeForm.personnel.filter((val,i) => i!=index);
    
    if(type=='subgrantsubcontract')
      this.intakeForm.subGrantsOrSubContracts = this.intakeForm.subGrantsOrSubContracts.filter((val,i) => i!=index);
    
    if(type=='projectlocation')
      this.intakeForm.projectLocations = this.intakeForm.projectLocations.filter((val,i) => i!=index);
    
    if(type=='additionalparty')
      this.intakeForm.additionalInvolvedParties = this.intakeForm.additionalInvolvedParties.filter((val,i) => i!=index);
    
    if(type=='space')
      this.intakeForm.spaces = this.intakeForm.spaces.filter((val,i) => i!=index);
    
    if(type=='requestedequipment')
      this.intakeForm.requestedEquipment = this.intakeForm.requestedEquipment.filter((val,i) => i!=index);
    
    if(type=='hazard')
      this.intakeForm.hazardousSubstances = this.intakeForm.hazardousSubstances.filter((val,i) => i!=index);
        
      this.displayDialog = false;
  }    
}