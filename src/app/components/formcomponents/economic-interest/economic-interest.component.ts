import { Component, OnInit } from '@angular/core';
import {EconomicInterestPI} from '../../../models/PreAward/EconomicInterestPI';
import { PreawardService } from '../../../services/preaward.service';
import {ProposalService} from '../../../services/proposal.service';
import { Proposal } from '../../../models/PreAward/Proposal';
@Component({
  selector: 'app-economic-interest',
  templateUrl: './economic-interest.component.html',
  styleUrls: ['./economic-interest.component.css']
})
export class EconomicInterestComponent implements OnInit {
  economicInterestPI: EconomicInterestPI;
  index: number;
  breadCrumbStrings: string[];

  constructor(private proposalService: ProposalService, private preAwardService: PreawardService) {
    this.economicInterestPI = this.proposalService.getEconomicInterestPI();
  }

  ngOnInit() {
    this.index = 0;
    this.breadCrumbStrings =
    ['Instructions for Completing Form 700-U', 'General Information', 'Funding Entity', 'Filer Information', 'Verification']; // page title
  }
  // listens for index updates from form footer
  updateIndex(value) {
    this.index = value;
   }

  update() {
     this.preAwardService.updateEconomicInterestPI(this.economicInterestPI).subscribe(newEconomicInterest => {
       console.log(newEconomicInterest);
      //  this.proposalService.updateEconomicInterestPI(this.economicInterestPI);
     });
   }
}
