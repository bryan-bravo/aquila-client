import { Component, OnInit } from '@angular/core';
import{IntakeForm} from '../../models/PreAward/IntakeForm';
import{BudgetFile} from '../../models/PreAward/BudgetFile';

@Component({
  selector: 'app-new-proposal',
  templateUrl: './new-proposal.component.html',
  styleUrls: ['./new-proposal.component.css']
})
export class NewProposalComponent implements OnInit {
  intakeForm:IntakeForm;
  budgetFile:BudgetFile;
  constructor() {
    this.intakeForm = new IntakeForm();
    this.budgetFile = new BudgetFile();
   }

  ngOnInit() {
  }

}
