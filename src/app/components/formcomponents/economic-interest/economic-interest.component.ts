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
    this.economicInterestPI = this.parseEconomicInterestPi(this.proposalService.getEconomicInterestPI());
    // this.economicInterestPI = new EconomicInterestPI();
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
   parseEconomicInterestPi(economicInterestPI) {
    if (economicInterestPI.fundDate !== null) {
      economicInterestPI.fundDate = new Date(economicInterestPI.fundDate);
    }
    if (economicInterestPI.interimDate !== null) {
      economicInterestPI.interimDate = new Date(economicInterestPI.interimDate);
    }
    if (economicInterestPI.dateDisposed !== null) {
      economicInterestPI.dateDisposed = new Date(economicInterestPI.dateDisposed);
    }
    if (economicInterestPI.dateSigned !== null) {
      economicInterestPI.dateSigned = new Date(economicInterestPI.dateSigned);
    }
    if (economicInterestPI.giftsReceivedDate !== null) {
      economicInterestPI.giftsReceivedDate = new Date(economicInterestPI.giftsReceivedDate);
    }
    if (economicInterestPI.travelStartDate !== null) {
      economicInterestPI.travelStartDate = new Date(economicInterestPI.travelStartDate);
    }
    if (economicInterestPI.travelEndDate !== null) {
      economicInterestPI.travelEndDate = new Date(economicInterestPI.travelEndDate);
    }
    if (economicInterestPI.dateSigned !== null) {
      economicInterestPI.dateSigned = new Date(economicInterestPI.dateSigned);
    }
    return economicInterestPI;
   }
}
