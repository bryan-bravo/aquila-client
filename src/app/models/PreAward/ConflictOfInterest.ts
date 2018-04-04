import { User } from "../User";

export class ConflictOfInterest{
	id: number;
	type: string;
	progress: number;
	pI: User;
    proposalNumber: number;
    proposalTitle: string;
	sponsor: Map<boolean,string>;
	subAward: boolean;
	subAwardSponsor: string;
	subAwardAgency: string;
	disclosureReasons: Map<boolean,string>;
	subawardWithFederalAgencyPassThrough: string;
    budgetPeriodStart: Date;
	budgetPeriodEnd: Date;
	projectPeriodStart: Date;
	projectPeriodEnd: Date;
	amountRequested: number;
	iRBACUCIBCNo: number; 
	significantFinInterest: boolean;
	piSign: string;
	piDate: Date;
	keyPersonnelSign: string; //signature
	keyPersonnelDate: Date;
	//anyOtherInvestigator?: boolean;//PI page
	//otherInvestigators?: string[];//PI page 
	aRIOfficial: boolean;
	aRIDate: Date;
	
	constructor(id, type){
		this.id=id;
		this.type = type;
		}
}
