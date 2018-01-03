export class ConflictOfInterest{
    private _id:number;
    private proposalId:number;
    private _proposalTitle:string;

    private _sponsorType:string;
    private _sponsorValue:string;

    private  _disclosureReasons:Map<boolean,string>;
    private  _budgetPeriodStart:Date;
	private  _budgetPeriodEnd:Date;
	private  _projectPeriodStart:Date;
	private  _projectPeriodEnd:Date;
	private  _amountRequested:number;
	private  _iRBACUCIBCNo:number; 
	private  _significantFinInterest:boolean;
    // private Signature keyPersonnelSign;
	// private _keyPersonnelDate:Date;
	private _aRIOfficial:boolean;
	private _aRIDate:Date;
}
