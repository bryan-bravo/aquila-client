import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
 // this is the bidirectional data flow service
@Injectable()
export class ProposalService {
  proposal: any;
  private proposalSource = new Subject<any>();
  private formSource = new Subject<any>();
  proposalToForm$ = this.proposalSource.asObservable();
  updatedFormtoProposal$ = this.formSource.asObservable();

  constructor() { }
  // proposal
  parentUpdatesProposal(proposal: any) {
    this.proposal = proposal;
  }
  // form
  getIntakeForm() {
    return this.proposal.intakeForm;
  }
  updateIntakeForm(intakeForm) {
    this.formSource.next(intakeForm);
  }
}
// user clicks on form
// edit proposal calls parent Update Proposal
// form component is created, which calls getIntakeForm()
// user updates Proposal from form component on interaction
