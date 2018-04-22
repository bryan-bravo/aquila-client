import { User } from '../User';

export class ConflictOfInterest {
    id: number;
    complete: boolean;
    type: string;
    proposalNumber: number;
    // OI: proposal information
    proposalTitle: string;
    // all: sponsor
    sponsor: string;
    sponsorType: string;
    sponsorSpecification: string;
    // all: reasons for disclosure
    newProposal: boolean;
    contAddFunding: boolean;
    newChangeInvestigator: boolean;
    newInterestObtained: boolean;
    previousProposalNumber: string;
    newSponsor: boolean;
    previousSponsorName: string;
    requestFromIrb: boolean;
    noCostTimeExtension: boolean;
    other: boolean;
    otherSpecification: string;
    budgetPeriodStart: Date;
    budgetPeriodEnd: Date;
    projectPeriodStart: Date;
    projectPeriodEnd: Date;
    amountRequested: number;
    iRBACUCIBCNo: string;
    // all: disclosure and certification
    significantFinInterest: boolean;
    // PI: listing other key personnel
    anyOtherInvestigators: boolean;
    otherInvestigatorsValue: string;
    // all: signatures
    piSignature: string;
    piDate: Date;
    keyPersonnelSign: string;
    keyPersonnelDate: Date;
    aRIOfficial: boolean;
    aRIDate: Date;
    proposal: null;

}