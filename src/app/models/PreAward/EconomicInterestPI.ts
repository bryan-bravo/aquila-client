import { Department } from '../Department';
export class EconomicInterestPI {
    // general info
    id: number;
    isComplete: boolean;
    campus: string;
    progress: number;
    lastName: string;
    firstName: string;
    middleInitial: string;
    phoneNumber: string;
    department: Department;
    mailCode: string;
    email: string;
    projectTitle: string;
    // 1 Information Regarding Funding Entity
    entityName: string;
    // entityAmount: string; remove from backend
    entityAddress: string;
    principalBusiness: string;
    fundingAmount: number;
    estimateAmount: boolean;
    actualAmount: boolean;
    // 2 Type of Statement
    initialFunding: boolean;
    fundDate: Date;
    interimFund: boolean;
    interimDate: Date;
    // 3 Filer Information
    // A
    positionHeld: boolean;
    positionTitle: string;
    // B
    investmentGreaterThan: boolean;
    investAmount: number;
    dateDisposed: Date;
    // C
    receivedIncome: boolean;
    receivedAmount: number;
    receivedThroughSpouse: boolean;
    // D
    receivedThroughEntity: boolean;
    loanAmount: number; // remove dropdown
    loanSecured: boolean; // make toggle
    loanInterest: number;
    loanPaidOff: boolean;
    // E
    giftsReceived: boolean;
    giftsDescription: string;
    giftsValue: number;
    giftsReceivedDate: Date;
    // F
    travelThroughEntity: boolean;
    travelPaymentTypeGift: boolean;
    travelPaymentTypeIncome: boolean;
    travelAmount: number;
    travelStartDate: Date;
    travelEndDate: Date;
    travelDescription: string;
    // 4 Verification
    dateSigned: Date;
    signature: string;
}
// date uas recieved this form

