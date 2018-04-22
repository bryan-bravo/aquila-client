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
    this.coiForm = this.parseCoiForm(proposalService.getConflictOfInterestForm().coiForm);
   }

  ngOnInit() {
    this.index = 0;
    this.breadCrumbStrings = ['General Info', 'Disclosure and Certification', 'Significant Financial Interest'];
  }
  updateIndex(value) {
    this.index = value;
   }
   parseCoiForm(coiForm) {
    if (coiForm.budgetPeriodStart !== null) {
      coiForm.budgetPeriodStart = new Date (coiForm.budgetPeriodStart);
    }
    if (coiForm.budgetPeriodEnd !== null) {
      coiForm.budgetPeriodEnd = new Date (coiForm.budgetPeriodEnd);
    }
    if (coiForm.projectPeriodStart !== null) {
      coiForm.projectPeriodStart = new Date (coiForm.projectPeriodStart);
    }
    if (coiForm.projectPeriodEnd !== null) {
      coiForm.projectPeriodEnd = new Date (coiForm.projectPeriodEnd);
    }
    if (coiForm.piDate !== null) {
      coiForm.piDate = new Date (coiForm.piDate);
    }
    if (coiForm.keyPersonnelDate !== null) {
      coiForm.keyPersonnelDate = new Date (coiForm.keyPersonnelDate);
    }
    if (coiForm.aRIDate !== null) {
      coiForm.aRIDate = new Date (coiForm.aRIDate);
    }
    return coiForm;
   }
}
// parse the dates
// save
// add the reason
