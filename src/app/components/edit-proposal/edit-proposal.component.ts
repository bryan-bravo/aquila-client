import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {trigger, state, transition, style, animate, query, animateChild} from '@angular/animations';
import {Proposal} from '../../models/PreAward/Proposal';
import {ProposalService} from '../../services/proposal.service';
import { IntakeForm } from '../../models/PreAward/IntakeForm';
import { PreawardService } from '../../services/preaward.service';
import {AuthenticationService} from '../../services/authentication.service';
import {GrowlModule} from 'primeng/primeng';
@Component({
  selector: 'app-edit-proposal',
  templateUrl: './edit-proposal.component.html',
  styleUrls: ['./edit-proposal.component.css'],
  // encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fade', [
    // state(),
      transition('void => *', [
        style({opacity: 0}),
        animate(500, style({opacity: 1})),
        query('@stageAnimation', [
          animateChild()
        ], { optional: true})
      ]),
      transition('* => void', [
        animate(500, style({opacity: 0}))
      ])
    ])
  ]

})
export class EditProposalComponent implements OnInit {
  user: any;
  proposalId: string; // current proposal request being modified
  proposal: Proposal;
  menuState: boolean; // determines if menu or form field is shown
  routerState: boolean;
  currentForm: string;
  showSpinner = true;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private proposalService: ProposalService,
    private preAwardService: PreawardService,
    private authService: AuthenticationService
  ) {
    // listens for updates from the children form container
    proposalService.updatedFormtoProposal$.subscribe(form => {
       console.log(form);
    });
  }

  ngOnInit() {
    this.getParams();
    // this.getProposal();
    setTimeout(() => {this.getProposal()} , 1000);
    this.menuState = true;
    this.routerState = false;
    this.currentForm = '';
    this.user = this.authService.getUserData();
  }
  // get id from pi preaward component
  getParams() {
    this.activatedRoute.params.subscribe(params => {
       this.proposalId = params['id'];
    });
  }
  getProposal() { // 2 service that calls request is called
    this.preAwardService.getProposal(this.proposalId).subscribe( proposal => {
      this.proposal = proposal; // setting response proposal equal to local proposal field
      this.showSpinner = false;
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
    if (this.menuState) {
      this.menuState = false;
      setTimeout(() => {
        this.routerState = true;
      }, 500);
    } else {
      this.routerState = false;
      setTimeout(() => {
        this.menuState = true;
      }, 500);
    }

  }
  // set which form to display
  setCurrentForm(form) {
    this.currentForm = form;
    this.sendForm();
    this.changeState();
  }
  // conflict Of interest form is selected
  coiSelect(event) {
    this.proposal.selectedCoiFormId = event.data.id;
    this.setCurrentForm('coi');
  }
  // when child component is instantied, update proposal in service
  sendForm() {
    // console.log(this.proposal)
    this.proposalService.parentUpdatesProposal(this.proposal);
  }
}
