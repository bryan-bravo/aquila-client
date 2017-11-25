import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import {Proposal} from '../../models/PreAward/Proposal';
import {MockData} from './mock-data';
@Component({
  selector: 'app-edit-proposal',
  templateUrl: './edit-proposal.component.html',
  styleUrls: ['./edit-proposal.component.css']
})
export class EditProposalComponent implements OnInit {
  proposalId:string;//current proposal request being modified
  formsStatus:any[];//shows the state of each form 
  modifiedForms:string[];//shows all the forms that were modified
  progress:number;//for the task bar
  proposal:Proposal;
  selectedForm:string;
  constructor(private router:ActivatedRoute) { }


  ngOnInit() {
    this.selectedForm='';
    this.getParams();
    this.fillMockData();
  }
  getParams(){
    this.router.params.subscribe(params => {
       this.proposalId=params['id'];
    });	
    }
  fillMockData(){
    this.formsStatus=MockData.formsStatus;
  }
}
//get the proposal object from the server
// have a nested router?
   