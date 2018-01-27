import { Component, OnInit } from '@angular/core';
import {  Router, RouterLink } from '@angular/router';
import { PreawardService } from '../../services/preaward.service';
import { User } from '../../models/User';
import { Proposal } from '../../models/PreAward/Proposal';

import { MockDataService } from '../../services/mock-data.service';
@Component({
  selector: 'app-pi-pre-award',
  templateUrl: './pi-pre-award.component.html',
  styleUrls: ['./pi-pre-award.component.css']
})
export class PiPreAwardComponent implements OnInit {
  userName: string;
  usersProposals: Proposal[];
  displayDialog: boolean;
  newProposalName: string;
  constructor(
    private router: Router,
    private preAwardService: PreawardService
  ) { }
  ngOnInit() {
    this.getProposals();
    this.displayDialog = false;
  }

  getProposals() {
    this.userName = JSON.parse(localStorage.getItem('user')).username;
    this.preAwardService.getProposals().subscribe(proposals => {
      this.usersProposals = proposals;
    });
  }

  createProposal() {
    this.preAwardService.newProposal(this.newProposalName).subscribe(proposal => {
      this.usersProposals.push(proposal);
    });
  }
  showDialog() {
    this.displayDialog = true;
  }
}
