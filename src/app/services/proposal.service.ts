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
    this.proposal.intakeForm.proposalId = this.proposal.id;
    return this.proposal.intakeForm;
  }
  updateIntakeForm(intakeForm) {
    this.formSource.next(intakeForm);
  }
  getEquipmentForm() {
    return {'equipmentForm': this.proposal.equipmentForm, 'proposalId': this.proposal.id};
  }
  updateEquipmentForm(equipmentForm) {
    this.formSource.next(equipmentForm);
  }
  getEconomicInterestPI() {
    this.proposal.economicInterestPi.proposalId = this.proposal.id;
    return this.proposal.economicInterestPi;
  }
  updateEconomicInterestPI(economicInterestPI) {
    this.formSource.next(economicInterestPI);
  }
  getTimeline() {
    return {'proposalId': this.proposal.id, 'timeline': this.proposal.timeline};
  }
  updateTimeline(timeline) {
    this.formSource.next(timeline);
  }
  getConflictOfInterestForm() {
    // with given id find where to put it
    const coiForm = this.proposal.conflictOfInterestForms.find( coi => {
      return coi.id === this.proposal.selectedCoiFormId;
    });
    return {'proposalId': this.proposal.id, 'coiForm': coiForm};
  }
}
// user clicks on form
// edit proposal calls parent Update Proposal
// form component is created, which calls getIntakeForm()
// user updates Proposal from form component on interaction
