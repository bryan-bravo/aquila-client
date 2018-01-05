export class  IntakeForm {
	private _id:string; 
	//A
	private _principalInvestigator:string;
	private _department:string;
	//   _college?:string;//can be found from department
	private _projectTitle:string;
	private _proposedFundingAmount:string;
	private _startDate:Date;
	private _endDate:Date;
	//B 
	private _personnel:Personnel[];//personnel object
	//C
	private _anticipateStipend:boolean;
	private _stipends:string;
	private _facultyStudentResearchCreativeActivities:boolean;
	private _studentsInResearch:boolean;  
	private _noOfUndergradStudents:number;
	private _noOfGradStudents:number
	private _vlaboratoryAssitance:boolean;
	private _dataCollection:boolean; 
	private _reportWriting:boolean;
	private _literatureReview:boolean;
	private _codingOrDataEntry:boolean;
	private _presentation:boolean;
	private _archivalResearch:boolean;
	private _dataAnalysis:boolean;
	private _otherActivities:boolean;
	private _otherActivitiesList:string[];
	//D
	private _subGrantsOrSubContracts:SubgrantSubProject[]; 
	//E
	private _projectLocations:ProjectLocation[];
	//F
	private _additionalInvolvedParties:AdditionalParty[];
	//G
	private _agencyCostRatePercentage:number;
	private _agencyCostSharing:boolean;
	private _piCostSharing:boolean;
	private _computersRequested:number;
	private _requestedEquipment:RequestedEquipment[];//map<string:name,double:cost>
	//H
	private _spaces:Space[];//space
	//I
	private _hazardousSubstances:Hazard[];//<string:agent,string:type>
	//J
	private _humanSubject:boolean;
	private _vertebrateAnimals:boolean;
	private _questionareField:string;
	private _categoryTitle:string;
	//K
	private _assistanceWithProposalDevelopment:boolean;
	private _technicalAssistance:boolean; 
	private _letterOfSupportPresident:boolean;
	private _letterOfSupportProvost:boolean;
	private _letterOfSupportAssocVPOfResearch:boolean;
	private _duplicationfFinalDocumentPackage:boolean;
	private _noOfCopies:number;
	//L
	private _summary:string;

	constructor(
		id: string, 
		principalInvestigator?: string, 
		department?: string, 
		projectTitle?: string, 
		proposedFundingAmount?: string, 
		startDate?: Date, 
		endDate?: Date, 
		personnel?: Personnel[], 
		anticipateStipend?: boolean, 
		stipends?: string, 
		facultyStudentResearchCreativeActivities?: boolean, 
		studentsInResearch?: boolean, 
		noOfUndergradStudents?: number, 
		vlaboratoryAssitance?: boolean, 
		dataCollection?: boolean, 
		reportWriting?: boolean, 
		literatureReview?: boolean, 
		codingOrDataEntry?: boolean, 
		presentation?: boolean, 
		archivalResearch?: boolean, 
		dataAnalysis?: boolean, 
		otherActivities?: boolean,
		 otherActivitiesList?: string[], 
		 subGrantsOrSubContracts?: SubgrantSubProject[], 
		 projectLocations?: ProjectLocation[], 
		 additionalInvolvedParties?: AdditionalParty[], 
		 agencyCostRatePercentage?: number, 
		 agencyCostSharing?: boolean, 
		 piCostSharing?: boolean, 
		 computersRequested?: number, 
		 requestedEquipment?: RequestedEquipment[], 
		 spaces?: Space[], 
		 hazardousSubstances?: Hazard[], 
		 humanSubject?: boolean, 
		 vertebrateAnimals?: boolean, 
		 questionareField?: string, 
		 categoryTitle?: string, 
		 assistanceWithProposalDevelopment?: boolean, 
		 technicalAssistance?: boolean, 
		 letterOfSupportPresident?: boolean, 
		 letterOfSupportProvost?: boolean, 
		 letterOfSupportAssocVPOfResearch?: boolean, 
		 duplicationfFinalDocumentPackage?: boolean, 
		 noOfCopies?: number, 
		 summary?: string) {
		this._id = id;
		this._principalInvestigator = principalInvestigator;
		this._department = department;
		this._projectTitle = projectTitle;
		this._proposedFundingAmount = proposedFundingAmount;
		this._startDate = startDate;
		this._endDate = endDate;
		this._personnel = personnel;
		this._anticipateStipend = anticipateStipend;
		this._stipends = stipends;
		this._facultyStudentResearchCreativeActivities = facultyStudentResearchCreativeActivities;
		this._studentsInResearch = studentsInResearch;
		this._noOfUndergradStudents = noOfUndergradStudents;
		this._vlaboratoryAssitance = vlaboratoryAssitance;
		this._dataCollection = dataCollection;
		this._reportWriting = reportWriting;
		this._literatureReview = literatureReview;
		this._codingOrDataEntry = codingOrDataEntry;
		this._presentation = presentation;
		this._archivalResearch = archivalResearch;
		this._dataAnalysis = dataAnalysis;
		this._otherActivities = otherActivities;
		this._otherActivitiesList = otherActivitiesList;
		this._subGrantsOrSubContracts = subGrantsOrSubContracts;
		this._projectLocations = projectLocations;
		this._additionalInvolvedParties = additionalInvolvedParties;
		this._agencyCostRatePercentage = agencyCostRatePercentage;
		this._agencyCostSharing = agencyCostSharing;
		this._piCostSharing = piCostSharing;
		this._computersRequested = computersRequested;
		this._requestedEquipment = requestedEquipment;
		this._spaces = spaces;
		this._hazardousSubstances = hazardousSubstances;
		this._humanSubject = humanSubject;
		this._vertebrateAnimals = vertebrateAnimals;
		this._questionareField = questionareField;
		this._categoryTitle = categoryTitle;
		this._assistanceWithProposalDevelopment = assistanceWithProposalDevelopment;
		this._technicalAssistance = technicalAssistance;
		this._letterOfSupportPresident = letterOfSupportPresident;
		this._letterOfSupportProvost = letterOfSupportProvost;
		this._letterOfSupportAssocVPOfResearch = letterOfSupportAssocVPOfResearch;
		this._duplicationfFinalDocumentPackage = duplicationfFinalDocumentPackage;
		this._noOfCopies = noOfCopies;
		this._summary = summary;
	}

	public get id(): string {
		return this._id;
	}

	public set id(value: string) {
		this._id = value;
	}

	public get principalInvestigator(): string {
		return this._principalInvestigator;
	}

	public set principalInvestigator(value: string) {
		this._principalInvestigator = value;
	}

	public get department(): string {
		return this._department;
	}

	public set department(value: string) {
		this._department = value;
	}

	public get projectTitle(): string {
		return this._projectTitle;
	}

	public set projectTitle(value: string) {
		this._projectTitle = value;
	}

	public get proposedFundingAmount(): string {
		return this._proposedFundingAmount;
	}

	public set proposedFundingAmount(value: string) {
		this._proposedFundingAmount = value;
	}

	public get startDate(): Date {
		return this._startDate;
	}

	public set startDate(value: Date) {
		this._startDate = value;
	}

	public get endDate(): Date {
		return this._endDate;
	}

	public set endDate(value: Date) {
		this._endDate = value;
	}

	public get personnel(): Personnel[] {
		return this._personnel;
	}

	public set personnel(value: Personnel[]) {
		this._personnel = value;
	}

	public get anticipateStipend(): boolean {
		return this._anticipateStipend;
	}

	public set anticipateStipend(value: boolean) {
		this._anticipateStipend = value;
	}

	public get stipends(): string {
		return this._stipends;
	}

	public set stipends(value: string) {
		this._stipends = value;
	}

	public get facultyStudentResearchCreativeActivities(): boolean {
		return this._facultyStudentResearchCreativeActivities;
	}

	public set facultyStudentResearchCreativeActivities(value: boolean) {
		this._facultyStudentResearchCreativeActivities = value;
	}

	public get studentsInResearch(): boolean {
		return this._studentsInResearch;
	}

	public set studentsInResearch(value: boolean) {
		this._studentsInResearch = value;
	}

	public get noOfUndergradStudents(): number {
		return this._noOfUndergradStudents;
	}

	public set noOfUndergradStudents(value: number) {
		this._noOfUndergradStudents = value;
	}

	public get vlaboratoryAssitance(): boolean {
		return this._vlaboratoryAssitance;
	}

	public set vlaboratoryAssitance(value: boolean) {
		this._vlaboratoryAssitance = value;
	}

	public get dataCollection(): boolean {
		return this._dataCollection;
	}

	public set dataCollection(value: boolean) {
		this._dataCollection = value;
	}

	public get reportWriting(): boolean {
		return this._reportWriting;
	}

	public set reportWriting(value: boolean) {
		this._reportWriting = value;
	}

	public get literatureReview(): boolean {
		return this._literatureReview;
	}

	public set literatureReview(value: boolean) {
		this._literatureReview = value;
	}

	public get codingOrDataEntry(): boolean {
		return this._codingOrDataEntry;
	}

	public set codingOrDataEntry(value: boolean) {
		this._codingOrDataEntry = value;
	}

	public get presentation(): boolean {
		return this._presentation;
	}

	public set presentation(value: boolean) {
		this._presentation = value;
	}

	public get archivalResearch(): boolean {
		return this._archivalResearch;
	}

	public set archivalResearch(value: boolean) {
		this._archivalResearch = value;
	}

	public get dataAnalysis(): boolean {
		return this._dataAnalysis;
	}

	public set dataAnalysis(value: boolean) {
		this._dataAnalysis = value;
	}

	public get otherActivities(): boolean {
		return this._otherActivities;
	}

	public set otherActivities(value: boolean) {
		this._otherActivities = value;
	}

	public get otherActivitiesList(): string[] {
		return this._otherActivitiesList;
	}

	public set otherActivitiesList(value: string[]) {
		this._otherActivitiesList = value;
	}

	public get subGrantsOrSubContracts(): SubgrantSubProject[] {
		return this._subGrantsOrSubContracts;
	}

	public set subGrantsOrSubContracts(value: SubgrantSubProject[]) {
		this._subGrantsOrSubContracts = value;
	}

	public get projectLocations(): ProjectLocation[] {
		return this._projectLocations;
	}

	public set projectLocations(value: ProjectLocation[]) {
		this._projectLocations = value;
	}

	public get additionalInvolvedParties(): AdditionalParty[] {
		return this._additionalInvolvedParties;
	}

	public set additionalInvolvedParties(value: AdditionalParty[]) {
		this._additionalInvolvedParties = value;
	}

	public get agencyCostRatePercentage(): number {
		return this._agencyCostRatePercentage;
	}

	public set agencyCostRatePercentage(value: number) {
		this._agencyCostRatePercentage = value;
	}

	public get agencyCostSharing(): boolean {
		return this._agencyCostSharing;
	}

	public set agencyCostSharing(value: boolean) {
		this._agencyCostSharing = value;
	}

	public get piCostSharing(): boolean {
		return this._piCostSharing;
	}

	public set piCostSharing(value: boolean) {
		this._piCostSharing = value;
	}

	public get computersRequested(): number {
		return this._computersRequested;
	}

	public set computersRequested(value: number) {
		this._computersRequested = value;
	}

	public get requestedEquipment(): RequestedEquipment[] {
		return this._requestedEquipment;
	}

	public set requestedEquipment(value: RequestedEquipment[]) {
		this._requestedEquipment = value;
	}

	public get spaces(): Space[] {
		return this._spaces;
	}

	public set spaces(value: Space[]) {
		this._spaces = value;
	}

	public get hazardousSubstances(): Hazard[] {
		return this._hazardousSubstances;
	}

	public set hazardousSubstances(value: Hazard[]) {
		this._hazardousSubstances = value;
	}

	public get humanSubject(): boolean {
		return this._humanSubject;
	}

	public set humanSubject(value: boolean) {
		this._humanSubject = value;
	}

	public get vertebrateAnimals(): boolean {
		return this._vertebrateAnimals;
	}

	public set vertebrateAnimals(value: boolean) {
		this._vertebrateAnimals = value;
	}

	public get questionareField(): string {
		return this._questionareField;
	}

	public set questionareField(value: string) {
		this._questionareField = value;
	}

	public get categoryTitle(): string {
		return this._categoryTitle;
	}

	public set categoryTitle(value: string) {
		this._categoryTitle = value;
	}

	public get assistanceWithProposalDevelopment(): boolean {
		return this._assistanceWithProposalDevelopment;
	}

	public set assistanceWithProposalDevelopment(value: boolean) {
		this._assistanceWithProposalDevelopment = value;
	}

	public get technicalAssistance(): boolean {
		return this._technicalAssistance;
	}

	public set technicalAssistance(value: boolean) {
		this._technicalAssistance = value;
	}

	public get letterOfSupportPresident(): boolean {
		return this._letterOfSupportPresident;
	}

	public set letterOfSupportPresident(value: boolean) {
		this._letterOfSupportPresident = value;
	}

	public get letterOfSupportProvost(): boolean {
		return this._letterOfSupportProvost;
	}

	public set letterOfSupportProvost(value: boolean) {
		this._letterOfSupportProvost = value;
	}

	public get letterOfSupportAssocVPOfResearch(): boolean {
		return this._letterOfSupportAssocVPOfResearch;
	}

	public set letterOfSupportAssocVPOfResearch(value: boolean) {
		this._letterOfSupportAssocVPOfResearch = value;
	}

	public get duplicationfFinalDocumentPackage(): boolean {
		return this._duplicationfFinalDocumentPackage;
	}

	public set duplicationfFinalDocumentPackage(value: boolean) {
		this._duplicationfFinalDocumentPackage = value;
	}

	public get noOfCopies(): number {
		return this._noOfCopies;
	}

	public set noOfCopies(value: number) {
		this._noOfCopies = value;
	}

	public get summary(): string {
		return this._summary;
	}

	public set summary(value: string) {
		this._summary = value;
	}

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