import { Component, OnInit } from '@angular/core';
import {  Router, RouterLink } from '@angular/router';
import { PreawardService } from '../../services/preaward.service';
import { User } from '../../models/User';
import { Proposal } from '../../models/PreAward/Proposal';

@Component({
  selector: 'app-proposal-archive',
  templateUrl: './proposal-archive.component.html',
  styleUrls: ['./proposal-archive.component.css']
})
export class ProposalArchiveComponent implements OnInit {
  proposals: Proposal[];
  displayedProposals: Proposal[];
  showSpinner: boolean;
  sortBy: string;
  constructor(private preAwardService: PreawardService, private router: Router
  ) { }

  ngOnInit() {
    this.showSpinner = true;
    this.populateProposals();
  }
  populateProposals() {
    this.preAwardService.getAllProposals().subscribe(proposals => {
      this.proposals = proposals;
      this.displayedProposals = proposals;
      this.showSpinner = false;
    });
  }
  navigate(proposalId) {
    this.router.navigate(['/editproposal', proposalId]);
  }
}
// drop the spinner
// make the request
// change the proposal status/request
// search
// filter by status
