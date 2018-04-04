import { Department } from "../Department";
export class EconomicInterestPI{
    id: number;
    progress: number;
    campus: string;
    lastName: string;
    firstName: string;
    middleInitial: string;
    phoneNumber: string;
    department: Department; 
    mailCode: string;
    email: string;
    projectTitle: string;
    entityName: string;
    entityAmount: string;
    entityAddress: string;
    principalBusiness: string;
    fundingAmount: number;
    estimateAmount: number;
    actualAmount: boolean;
    statementType: string;
    initalFunding: number;
    fundDate: Date;
    interimFund: number;
    interimDate: Date;
    positionHeld: boolean;
    positionTitle: string;
    investmentGreaterThan: boolean;
    investAmount: number;
    receivedIncome: boolean;
    receivedAmount: number;
    receivedThroughSpouse: boolean;
    receivedThroughEntity: boolean;
    loanAmount: number;
    loanType: string; //boolean
    loanInterest: number;
    loanPaidOff: boolean;
    giftsReceived: boolean;
    giftsDecription: string;
    giftsValue: number;
    giftsReceivedDate: Date;
    travelThroughEntity: boolean;
    travelPaymentTpye: string;//boolean
    atravelPaymentType: string;
    travelAmount: string;
    travelPaymentDates: Date[];
    travelDescription: string;
    dateSigned: Date;
    signature: string;
}