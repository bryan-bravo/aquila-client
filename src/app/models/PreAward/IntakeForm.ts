export interface  IntakeForm {
      readonly _id:string; 
    //A
    _principalInvestigator?:string;
      _department?:string;
    //   _college?:string;//can be found from department
      _projectTitle?:string;
      _proposedFundingAmount?:string;
      _startDate?:Date;
      _endDate?:Date;
    //B 
      _personnel?:Personnel[];//personnel object
    //C
      _anticipateStipend?:boolean;
      _stipends?:string;
      _facultyStudentResearchCreativeActivities?:boolean;
      _studentsInResearch?:boolean;  
      _noOfUndergradStudents?:number;
      _noOfGradStudents?:number
      _vlaboratoryAssitance?:boolean;
      _dataCollection?:boolean; 
      _reportWriting?:boolean;
      _literatureReview?:boolean;
      _codingOrDataEntry?:boolean;
      _presentation?:boolean;
      _archivalResearch?:boolean;
      _dataAnalysis?:boolean;
      _otherActivities?:boolean;
      _otherActivitiesList?:string[];
    //D
      _subGrantsOrSubContracts?:SubgrantSubProject[]; 
    //E
      _projectLocations?:ProjectLocation[];
    //F
      _additionalInvolvedParties?:AdditionalParty[];
    //G
      _agencyCostRatePercentage?:number;
      _agencyCostSharing?:boolean;
      _piCostSharing?:boolean;
      _computersRequested?:number;
      _requestedEquipment?:RequestedEquipment[];//map<string:name,double:cost>
    //H
      _spaces?:Space[];//space
    //I
      _hazardousSubstances?:Hazard[];//<string:agent,string:type>
    //J
      _humanSubject?:boolean;
      _vertebrateAnimals?:boolean;
      _questionareField?:string;
      _categoryTitle?:string;
    //K
      _assistanceWithProposalDevelopment?:boolean;
      _technicalAssistance?:boolean; 
      _letterOfSupportPresident?:boolean;
      _letterOfSupportProvost?:boolean;
      _letterOfSupportAssocVPOfResearch?:boolean;
      _duplicationfFinalDocumentPackage?:boolean;
      _noOfCopies?:number;
    //L
      _summary?:string;

} 
 export class Personnel
{
    private _name:string;
    private _employer:string;
    private _positionTitleOnGrant:string;
    private _units:string; 

	constructor(name?: string, employer?: string, positionTitleOnGrant?: string, units?: string) {
		this._name = name;
		this._employer = employer;
		this._positionTitleOnGrant = positionTitleOnGrant;
		this._units = units;
  }

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public get employer(): string {
		return this._employer;
	}

	public set employer(value: string) {
		this._employer = value;
	}

	public get positionTitleOnGrant(): string {
		return this._positionTitleOnGrant;
	}

	public set positionTitleOnGrant(value: string) {
		this._positionTitleOnGrant = value;
	}

	public get units(): string {
		return this._units;
	}

	public set units(value: string) {
		this._units = value;
	}
  

    
}

export class SubgrantSubProject{
    private _institutionName:string;
    private _proposedFundingAmount:number;
    private _contactPerson:string;
    private _contactInfo:string;  

    constructor(institutionName?:string,proposedFundingAmount?:number,contactPerson?:string,contactInfo?:string) {
      this._institutionName=institutionName;
      this._proposedFundingAmount=proposedFundingAmount;
      this._contactPerson=contactPerson;
      this._contactInfo=contactInfo;  
    }

	public get institutionName(): string {
		return this._institutionName;
	}

	public set institutionName(value: string) {
		this._institutionName = value;
	}

	public get proposedFundingAmount(): number {
		return this._proposedFundingAmount;
	}

	public set proposedFundingAmount(value: number) {
		this._proposedFundingAmount = value;
	}

	public get contactPerson(): string {
		return this._contactPerson;
	}

	public set contactPerson(value: string) {
		this._contactPerson = value;
	}

	public get contactInfo(): string {
		return this._contactInfo;
	}

	public set contactInfo(value: string) {
		this._contactInfo = value;
	}
    
}
export class ProjectLocation {
    private _siteName:string;
    private _siteAddress:string;
    private _projectedPercentOfTimeAtState:string;
    private _onCampusSpaceOrOnCampusRentalNeeded:boolean;

	constructor(siteName?:string,siteAddress?:string,projectedPercentOfTimeAtState?:string,onCampusSpaceOrOnCampusRentalNeeded?:boolean) {
    this._siteName=siteName;
    this._siteAddress=siteAddress;
    this._projectedPercentOfTimeAtState=projectedPercentOfTimeAtState;
    this._onCampusSpaceOrOnCampusRentalNeeded=onCampusSpaceOrOnCampusRentalNeeded;
  }

	public get siteName(): string {
		return this._siteName;
	}

	public set siteName(value: string) {
		this._siteName = value;
	}

	public get siteAddress(): string {
		return this._siteAddress;
	}

	public set siteAddress(value: string) {
		this._siteAddress = value;
	}

	public get projectedPercentOfTimeAtState(): string {
		return this._projectedPercentOfTimeAtState;
	}

	public set projectedPercentOfTimeAtState(value: string) {
		this._projectedPercentOfTimeAtState = value;
	}

	public get onCampusSpaceOrOnCampusRentalNeeded(): boolean {
		return this._onCampusSpaceOrOnCampusRentalNeeded;
	}

	public set onCampusSpaceOrOnCampusRentalNeeded(value: boolean) {
		this._onCampusSpaceOrOnCampusRentalNeeded = value;
	}


}
export class AdditionalParty{
    private _partyName:string;
    private _supervisor:string;
    private _explanationOfInvolvement:string;

	constructor(partyName?:string, supervisor?:string, explanationOfInvolvement?:string) {
    this._partyName=partyName;
    this._supervisor=supervisor;
    this._explanationOfInvolvement=explanationOfInvolvement;
  }

	public get partyName(): string {
		return this._partyName;
	}

	public set partyName(value: string) {
		this._partyName = value;
	}

	public get supervisor(): string {
		return this._supervisor;
	}

	public set supervisor(value: string) {
		this._supervisor = value;
	}

	public get explanationOfInvolvement(): string {
		return this._explanationOfInvolvement;
	}

	public set explanationOfInvolvement(value: string) {
		this._explanationOfInvolvement = value;
	}

}
export class Space{
    private _item:string;
    private _newSpace:string;
    private _sourceOfFunds:string;

	constructor(item?:string,newSpace?:string,sourceOfFunds?:string) {
    this._item=item;
    this._newSpace=newSpace;
    this._sourceOfFunds=sourceOfFunds;
  }

	public get item(): string {
		return this._item;
	}

	public set item(value: string) {
		this._item = value;
	}

	public get newSpace(): string {
		return this._newSpace;
	}

	public set newSpace(value: string) {
		this._newSpace = value;
	}

	public get sourceOfFunds(): string {
		return this._sourceOfFunds;
	}

	public set sourceOfFunds(value: string) {
		this._sourceOfFunds = value;
	}
    
}
export class Hazard{
  private _agent:string;
  private _type:string;

	constructor(agent?:string, type?:string) {
  this._agent = agent;
  this._type = type;
  }
  
	public get agent(): string {
		return this._agent;
	}

	public set agent(value: string) {
		this._agent = value;
	}

	public get type(): string {
		return this._type;
	}

	public set type(value: string) {
		this._type = value;
	}
  
    
}
export class RequestedEquipment {
    private _name:string;
    private _approximateCost:number;

	constructor(name?:string,approximateCost?:number) {
    this._name=name;
    this._approximateCost=approximateCost;
	}

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public get approximateCost(): number {
		return this._approximateCost;
	}

	public set approximateCost(value: number) {
		this._approximateCost = value;
	}
    
}