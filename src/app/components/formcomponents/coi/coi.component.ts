import { Component, OnInit, Input } from '@angular/core';
import {ConflictOfInterest} from '../../../models/PreAward/ConflictOfInterest';
import { ProposalService } from '../../../services/proposal.service';
@Component({
  selector: 'app-coi',
  templateUrl: './coi.component.html',
  styleUrls: ['./coi.component.css']
})
export class ConflictOfInterestComponent implements OnInit {
  @Input() type: string; // PHS or NONPHS
  coiForm: ConflictOfInterest;
  index: number;
  breadCrumbStrings: string[];
  constructor(proposalService: ProposalService) {
    this.coiForm = proposalService.getConflictOfInterestForm().coiForm;
   }

  ngOnInit() {
    this.index = 0;
    this.breadCrumbStrings = ['General Info', 'Disclosure and Certification', 'Significant Financial Interest'];
  }
  updateIndex(value) {
    this.index = value;
   }
}
// parse the dates
// model binding
//
