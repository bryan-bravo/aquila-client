import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Proposal} from '../../models/PreAward/Proposal';
import {ProposalService} from '../../services/proposal.service';
import { IntakeForm } from '../../models/PreAward/IntakeForm';
import { PreawardService } from '../../services/preaward.service';
// import {MockData} from './mock-data';
@Component({
  selector: 'app-edit-proposal',
  templateUrl: './edit-proposal.component.html',
  styleUrls: ['./edit-proposal.component.css']
})
export class EditProposalComponent implements OnInit {
  proposalId: string; // current proposal request being modified
  proposal: Proposal;
  menuState: boolean; // determines if menu or form field is shown
  routerState: boolean;
  currentForm: string;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private proposalService: ProposalService,
    private preAwardService: PreawardService) {
    // listens for updates from the children form container
    proposalService.updatedFormtoProposal$.subscribe(form => {
      //console.log(form);
    });
  }

  ngOnInit() {
    this.getParams();
    this.getProposal();// 1
    this.menuState = true;
    this.routerState = false;
    this.currentForm = '';

  }
  // get id from pi preaward component
  getParams() {
    this.activatedRoute.params.subscribe(params => {
       this.proposalId = params['id'];
    });
  }
  getProposal() { // 2 service that calls request is called
    this.preAwardService.getProposal(this.proposalId).subscribe( proposal => {
      this.proposal = proposal;// setting response proposal equal to local proposal field
    });
  }
  setProgressBar(percentage) {
    const formattedWidth = percentage + '%';
    return{
      'height': '2px;',
      'width': formattedWidth,
      'background-color': 'rgb(46, 236, 29)'
    };
  }
  // styles the bottom right label if form is required
  setRequiredForms(form) {
    // needs to be implemented
  }
  // toggle between form and menu
  changeState() {
    this.menuState = !this.menuState;
    this.routerState = !this.routerState;
  }
  // set which form to display
  setCurrentForm(form) {
    this.currentForm = form;
    this.sendForm();
    this.changeState();
  }
  // when child component is instantied, update proposal in service
  sendForm() {
    // console.log(this.proposal)
    this.proposalService.parentUpdatesProposal(this.proposal);
  }
}
