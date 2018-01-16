import { Component, OnInit } from '@angular/core';
import {  Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/User';
import { MockDataService } from '../../services/mock-data.service';
@Component({
  selector: 'app-pi-pre-award',
  templateUrl: './pi-pre-award.component.html',
  styleUrls: ['./pi-pre-award.component.css']
})
export class PiPreAwardComponent implements OnInit {
  user: User;
  condensedProposals: any[];
  displayDialog: boolean;
  newProposalName: string;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private mockService: MockDataService
  ) { }
  ngOnInit() {
    this.getUser();
    this.getCondensedProposals();
    this.displayDialog = false;
  }
  getUser() {
    this.user = this.authService.getUser();
  }
  getCondensedProposals() {
    this.mockService.getCondensedProposals(this.user.id).subscribe((response) => {
      this.condensedProposals = response.proposals;
    });
  }
  showDialog() {
    this.displayDialog = true;
  }
  createProposal() {
    this.mockService.createProposal(this.newProposalName, this.user.id).subscribe( (response) => {
      this.condensedProposals.push(response.proposal);
    });
  }
}
