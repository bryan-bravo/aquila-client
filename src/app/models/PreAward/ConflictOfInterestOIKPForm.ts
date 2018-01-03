import { User } from "../User";

export class ConflictOfInterestOIKPForm{
	private  _id:number; 
	//either PHS or NONPHS
	private _type:string;
	private _progress:number;
	private  _pI:User;
	private _proposalNumber:number;
	private _proposalTitle:string;
	//PHS
	//dos not have to be one because it says to choose one
	private  _sponsorPHS:Map<boolean,string>;
	//Non PHS
	private  _sponsorNONPHS:string;
	private  _subAward:boolean; 	
	private  _subAwardSponsor:string;
	private  _subAwardAgency:string; 
	private  _disclosureReasons:Map<boolean,string>;

	private  _budgetPeriodStart:Date;

	private  _budgetPeriodEnd:Date;

	private  _projectPeriodStart:Date;

	private  _projectPeriodEnd:Date;

	private  _amountRequested:number;

	private  _iRBACUCIBCNo:number; 

	private  _significantFinInterest:boolean;

    // private Signature keyPersonnelSign;
     
	private _keyPersonnelDate:Date;

	private _aRIOfficial:boolean;

	private _aRIDate:Date;

	constructor(
		id: number, 
		type: string, 
		progress?: number, 
		pI?: User, 
		proposalNumber?: number, 
		proposalTitle?: string, 
		disclosureReasons?: Map<boolean,string>, 
		budgetPeriodStart?: Date, 
		budgetPeriodEnd?: Date, 
		projectPeriodStart?: Date, 
		projectPeriodEnd?: Date, 
		amountRequested?: number, 
		iRBACUCIBCNo?: number, 
		significantFinInterest?: boolean, 
		aRIOfficial?: boolean, 
		aRIDate?: Date
	) {
		this._id = id;
		this._type = type;
		this._progress = progress;
		this._pI = pI;
		this._proposalNumber = proposalNumber;
		this._proposalTitle = proposalTitle;
		this._disclosureReasons = disclosureReasons;
		this._budgetPeriodStart = budgetPeriodStart;
		this._budgetPeriodEnd = budgetPeriodEnd;
		this._projectPeriodStart = projectPeriodStart;
		this._projectPeriodEnd = projectPeriodEnd;
		this._amountRequested = amountRequested;
		this._iRBACUCIBCNo = iRBACUCIBCNo;
		this._significantFinInterest = significantFinInterest;
		// this._keyPersonnelDate = keyPersonnelDate;
		this._aRIOfficial = aRIOfficial;
		this._aRIDate = aRIDate;
	}

	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}

	public get type(): string {
		return this._type;
	}

	public set type(value: string) {
		this._type = value;
	}

	public get progress(): number {
		return this._progress;
	}

	public set progress(value: number) {
		this._progress = value;
	}

	public get pI(): User {
		return this._pI;
	}

	public set pI(value: User) {
		this._pI = value;
	}

	public get proposalNumber(): number {
		return this._proposalNumber;
	}

	public set proposalNumber(value: number) {
		this._proposalNumber = value;
	}

	public get proposalTitle(): string {
		return this._proposalTitle;
	}
 
	public set proposalTitle(value: string) {
		this._proposalTitle = value;
	}
	public get sponsorPHS(): Map<boolean,string> {
		return this._sponsorPHS;
	}

	public set sponsorPHS(value: Map<boolean,string>) {
		this._sponsorPHS = value;
	}

	public get sponsorNONPHS(): string {
		return this._sponsorNONPHS;
	}

	public set sponsorNONPHS(value: string) {
		this._sponsorNONPHS = value;
	}

	public get subAward(): boolean {
		return this._subAward;
	}

	public set subAward(value: boolean) {
		this._subAward = value;
	}

	public get subAwardSponsor(): string {
		return this._subAwardSponsor;
	}

	public set subAwardSponsor(value: string) {
		this._subAwardSponsor = value;
	}

	public get subAwardAgency(): string {
		return this._subAwardAgency;
	}

	public set subAwardAgency(value: string) {
		this._subAwardAgency = value;
	}

	// public get keyPersonnelDate(): Date {
	// 	return this._keyPersonnelDate;
	// }

	// public set keyPersonnelDate(value: Date) {
	// 	this._keyPersonnelDate = value;
	// }
	
	public get disclosureReasons(): Map<boolean,string> {
		return this._disclosureReasons;
	}

	public set disclosureReasons(value: Map<boolean,string>) {
		this._disclosureReasons = value;
	}

	public get budgetPeriodStart(): Date {
		return this._budgetPeriodStart;
	}

	public set budgetPeriodStart(value: Date) {
		this._budgetPeriodStart = value;
	}

	public get budgetPeriodEnd(): Date {
		return this._budgetPeriodEnd;
	}

	public set budgetPeriodEnd(value: Date) {
		this._budgetPeriodEnd = value;
	}

	public get projectPeriodStart(): Date {
		return this._projectPeriodStart;
	}

	public set projectPeriodStart(value: Date) {
		this._projectPeriodStart = value;
	}

	public get projectPeriodEnd(): Date {
		return this._projectPeriodEnd;
	}

	public set projectPeriodEnd(value: Date) {
		this._projectPeriodEnd = value;
	}

	public get amountRequested(): number {
		return this._amountRequested;
	}

	public set amountRequested(value: number) {
		this._amountRequested = value;
	}

	public get iRBACUCIBCNo(): number {
		return this._iRBACUCIBCNo;
	}

	public set iRBACUCIBCNo(value: number) {
		this._iRBACUCIBCNo = value;
	}

	public get significantFinInterest(): boolean {
		return this._significantFinInterest;
	}

	public set significantFinInterest(value: boolean) {
		this._significantFinInterest = value;
	}

	public get aRIOfficial(): boolean {
		return this._aRIOfficial;
	}

	public set aRIOfficial(value: boolean) {
		this._aRIOfficial = value;
	}

	public get aRIDate(): Date {
		return this._aRIDate;
	}

	public set aRIDate(value: Date) {
		this._aRIDate = value;
	}


}