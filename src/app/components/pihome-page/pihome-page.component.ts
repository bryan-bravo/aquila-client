import { Component, OnInit } from '@angular/core';
import {  Router }   from '@angular/router';
import {PreawardService} from '../../services/preaward.service';
import {MenuItem,Header} from 'primeng/primeng';
import {ProjectInfo} from '../../models/ProjectInfo';
import {User} from '../../models/User';
import { isNgTemplate } from '@angular/compiler';
import { paramKey } from 'blocking-proxy/built/lib/webdriver_commands';

@Component({
  selector: 'app-pihome-page',
  templateUrl: './pihome-page.component.html',
  styleUrls: ['./pihome-page.component.css']
})
export class PiHomePageComponent implements OnInit {
  user:User;
  name:string;
  newProposalName:string;
  items: MenuItem[];
  projects: ProjectInfo[];
  constructor(private router:Router,private preAwardService:PreawardService) { }

  ngOnInit() {
    this.populateMenuBar();
    this.populateProjects();
  }
  populateMenuBar(){
    this.name ='Bryan';
    this.items=[ 
      {
       label:'Welcome '+this.name+',' 
      },
      {
        label: 'Settings',
        icon: 'fa-gear',
        //edit user settings,
        items: [
          {
            label:'Edit Information',
            command:this.editInformationClicked
          }
        ]
      }
    ];
  }
  populateProjects(){
    this.projects =[];    
    let dummyProject = {
      'name':'Beds In The Library',
      'date':'Jan 18, 2013 - current',
      'status':'PreAward',
      'id':3242342
    };
    this.projects.push(dummyProject);
    
  }
  editInformationClicked(){
//username,firstname, lastname, ctact email, phone number, 
//have these fields bind to the component, call a service, response perhaps change the user in sessionScope
}
newProposalNameSubmitted(){ 
  
  let idFromResponse ='qwerty';
  this.preAwardService.newProposal(this.newProposalName).subscribe(proposal=>{
    this.router.navigate(['editproposal/'+proposal.id]);
  });

}

}
 