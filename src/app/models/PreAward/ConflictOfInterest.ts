export class ConflictOfInterest{
	private _id:number;
	private _type:string; 
	private _proposalId:string;
    private _proposalNumber:number;
    private _proposalTitle:string;
    private _sponsorType:string;
    private _sponsorValue:string;
    private _disclosureReasons:Map<boolean,string>;
    private _budgetPeriodStart:Date;
	private _budgetPeriodEnd:Date;
	private _projectPeriodStart:Date;
	private _projectPeriodEnd:Date;
	private _amountRequested:number;
	private _iRBACUCIBCNo:number; 
	private _significantFinancialInterest:boolean;
	private _anyOtherInvestigator?:boolean;//PI page
	private _otherInvestigators?:string[];//PI page 
    // private Signature keyPersonnelSign;
	// private _keyPersonnelDate:Date;
	private _aRIOfficial:boolean;
	private _aRIDate:Date;

	constructor(
		id: number, 
		type:string,
		proposalId?: string, 
		proposalNumber?: number, 
		proposalTitle?: string, 
		sponsorType?: string, 
		sponsorValue?: string, 
		disclosureReasons?: Map<boolean,string>, 
		budgetPeriodStart?: Date, 
		budgetPeriodEnd?: Date, 
		projectPeriodStart?: Date, 
		projectPeriodEnd?: Date, 
		amountRequested?: number, 
		iRBACUCIBCNo?: number, 
		significantFinancialInterest?: boolean, 
		aRIOfficial?: boolean, 
		aRIDate?: Date) {
		this._id = id;
		this._type=type;0
		this._proposalId = proposalId;
		this._proposalNumber = proposalNumber;
		this._proposalTitle = proposalTitle;
		this._sponsorType = sponsorType;
		this._sponsorValue = sponsorValue;
		this._disclosureReasons = disclosureReasons;
		this._budgetPeriodStart = budgetPeriodStart;
		this._budgetPeriodEnd = budgetPeriodEnd;
		this._projectPeriodStart = projectPeriodStart;
		this._projectPeriodEnd = projectPeriodEnd;
		this._amountRequested = amountRequested;
		this._iRBACUCIBCNo = iRBACUCIBCNo;
		this._significantFinancialInterest = significantFinancialInterest;
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

	public get proposalId(): string {
		return this._proposalId;
	}

	public set proposalId(value: string) {
		this._proposalId = value;
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

	public get sponsorType(): string {
		return this._sponsorType;
	}

	public set sponsorType(value: string) {
		this._sponsorType = value;
	}

	public get sponsorValue(): string {
		return this._sponsorValue;
	}

	public set sponsorValue(value: string) {
		this._sponsorValue = value;
	}

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

	public get significantFinancialInterest(): boolean {
		return this._significantFinancialInterest;
	}

	public set significantFinancialInterest(value: boolean) {
		this._significantFinancialInterest = value;
	}

	// public get keyPersonnelDate(): Date {
	// 	return this._keyPersonnelDate;
	// }

	// public set keyPersonnelDate(value: Date) {
	// 	this._keyPersonnelDate = value;
	// }

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
