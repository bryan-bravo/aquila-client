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
  proposal:Proposal;
  menuState:boolean;//determines if menu or form field is shown
  routerState:boolean;
  constructor(private router:ActivatedRoute) { }


  ngOnInit() {
    this.getParams();
    this.menuState=false;
    this.routerState=true;
  }
  getParams(){                                            
    this.router.params.subscribe(params => {
       this.proposalId=params['id'];
    });	
    }
  setProgressBar(percentage){
    let formattedWidth = percentage+'%';
    return{
      'height':'2px;',
      'width':formattedWidth,
      'background-color':'rgb(46, 236, 29)'
    };   
  }
  setLabel(){

  }
  changeState(){
    this.menuState=!this.menuState;
    this.routerState=!this.routerState;
  }
}

   