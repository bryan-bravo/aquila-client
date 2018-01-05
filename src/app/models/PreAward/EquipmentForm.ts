export class EquipmentForm {
    private  _id:string;
    //1
    private _facultyName:string;
    private _department:string;//might handle
    private _grantAgency:string;
    private _proposalTitle:string;
    private _extension:boolean;
    private _extensionValue:string;
    private _costShare:boolean;
    private _donation:boolean;
    private _newEquipment:boolean;
    //2
    private _typeOfEquipment:string[];//might become an class
    private _buildingLocation:string;
    private _roomLocation:string;
    private _companyDonating:string;
    private _previousUse:string;
    //3
    private _spaceModificationRequirement:boolean; 
    private _electricalModification:boolean;
    private _volts:boolean;
    private _amp:boolean;
    private _phase:boolean;
    private _dedicatedPower:boolean;
    private _circuitBreakerSpecification:boolean;
    private _motorCompressorSpecification:boolean;
    private _specialNeeds:boolean;
    private _specialNeedsString:string;
    private _fwr:boolean;
    private _fwrPaidBy:string;
    private _hvac:boolean;
    private _airChilledWaterFlow:boolean;
    private _temperature:boolean;
    private _humidityControl:boolean;
    private _supplyPressure:boolean;
    private _centralPackageUnit:boolean;
    private _specialWork:boolean;
    private _noiseRequirement:boolean;
    private _plumbing:boolean;
    private _fluid:boolean;
    private _flowRate:boolean;
    private _pressure:boolean;
    private _fluidTemperature:boolean;
    private _pumpCompressorMotor:boolean;
    private _network:boolean;
    private _maintenance:boolean;
    private _licenseRequirements:boolean;
    private _hardware:boolean;
    private _hazardousMaterial:boolean;
    private _chemicals:any[];//map of <Integer,string>
    private _radiationUse:string;
    private _maintenanceRequirement:boolean;
    private _listOfRequirements:string[];
    private _sizeOfEquipment:boolean;
    private _height:number;
    private _width:number;
    private _length:number;
    private _directorOfResearchDevelopmentSignature:any;//Signature
    private _directorOfResearchDevelopmentSignatureDate:Date;
    private _directorOfFacilitiesServicesSignature:any;//Signature
    private _directorOfFacilitiesServicesSignatureDate:Date;

    constructor(
        id: string, 
        facultyName?: string,
        department?: string,
        grantAgency?:string, 
        proposalTitle?: string, 
        extension?: boolean, 
        extensionValue?: string, 
        costShare?: boolean, 
        donation?: boolean, 
        newEquipment?: boolean, 
        typeOfEquipment?: string[], 
        buildingLocation?: string, 
        roomLocation?: string, 
        companyDonating?: string, 
        previousUse?: string, 
        spaceModificationRequirement?: boolean,
        electricalModification?: boolean, 
        volts?: boolean, 
        amp?: boolean, 
        phase?: boolean, 
        dedicatedPower?: boolean, 
        circuitBreakerSpecification?: boolean, 
        motorCompressorSpecification?: boolean, 
        specialNeeds?: boolean, 
        FWR?: boolean, 
        specialNeedsstring?: string, 
        fwrPaidBy?: string, 
        hvac?: boolean, 
        airChilledWaterFlow?: boolean, 
        temperature?: boolean, 
        humidityControl?: boolean, 
        supplyPressure?: boolean, 
        centralPackageUnit?: boolean, 
        specialWork?: boolean, 
        noiseRequirement?: boolean, 
        plumbing?: boolean, 
        fluid?: boolean, 
        flowRate?: boolean, 
        pressure?: boolean, 
        fluidTemperature?: boolean, 
        pumpCompressorMotor?: boolean, 
        network?:boolean,
        maintenance?: boolean, 
        licenseRequirements?: boolean, 
        hardware?: boolean, 
        hazardousMaterial?: boolean, 
        chemicals?: any[], //chemicals
        radiationUse?: string, 
        maintenanceRequirement?: boolean, 
        listOfRequirements?: string[], 
        sizeOfEquipment?: boolean, 
        height?: number, 
        width?: number, 
        length?: number, 
        directorOfResearchDevelopmentSignature?: any, 
        directorOfResearchDevelopmentSignatureDate?: Date, 
        directorOfFacilitiesServicesSignature?: any, 
        directorOfFacilitiesServicesSignatureDate?: Date,
        
    ) {
		this._id = id;
		this._facultyName = facultyName;
        this._department = department;
        this._grantAgency = grantAgency;
		this._proposalTitle = proposalTitle;
		this._extension = extension;
		this._extensionValue = extensionValue;
		this._costShare = costShare;
		this._donation = donation;
		this._newEquipment = newEquipment;
		this._typeOfEquipment = typeOfEquipment;
		this._buildingLocation = buildingLocation;
		this._roomLocation = roomLocation;
		this._companyDonating = companyDonating;
		this._previousUse = previousUse;
		this._spaceModificationRequirement = spaceModificationRequirement;
		this._electricalModification = electricalModification;
		this._volts = volts;
		this._amp = amp;
		this._phase = phase;
		this._dedicatedPower = dedicatedPower;
		this._circuitBreakerSpecification = circuitBreakerSpecification;
		this._motorCompressorSpecification = motorCompressorSpecification;
		this._specialNeeds = specialNeeds;
		this._fwr = FWR;
		this._specialNeedsString = specialNeedsstring;
		this._fwrPaidBy = fwrPaidBy;
		this._hvac = hvac;
		this._airChilledWaterFlow = airChilledWaterFlow;
		this._temperature = temperature;
		this._humidityControl = humidityControl;
		this._supplyPressure = supplyPressure;
		this._centralPackageUnit = centralPackageUnit;
		this._specialWork = specialWork;
		this._noiseRequirement = noiseRequirement;
		this._plumbing = plumbing;
		this._fluid = fluid;
		this._flowRate = flowRate;
		this._pressure = pressure;
		this._fluidTemperature = fluidTemperature;
		this._pumpCompressorMotor = pumpCompressorMotor;
        this._network=network;
        this._maintenance = maintenance;
		this._licenseRequirements = licenseRequirements;
		this._hardware = hardware;
		this._hazardousMaterial = hazardousMaterial;
		this._chemicals = chemicals;
		this._radiationUse = radiationUse;
		this._maintenanceRequirement = maintenanceRequirement;
		this._listOfRequirements = listOfRequirements;
		this._sizeOfEquipment = sizeOfEquipment;
		this._height = height;
		this._width = width;
		this._length = length;
		this._directorOfResearchDevelopmentSignature = directorOfResearchDevelopmentSignature;
		this._directorOfResearchDevelopmentSignatureDate = directorOfResearchDevelopmentSignatureDate;
		this._directorOfFacilitiesServicesSignature = directorOfFacilitiesServicesSignature;
		this._directorOfFacilitiesServicesSignatureDate = directorOfFacilitiesServicesSignatureDate;
	}



	public get id(): string {
		return this._id;
	}

	public set id(value: string) {
		this._id = value;
	}

	public get facultyName(): string {
		return this._facultyName;
	}

	public set facultyName(value: string) {
		this._facultyName = value;
	}

	public get department(): string {
		return this._department;
	}

	public set department(value: string) {
		this._department = value;
	}

	public get proposalTitle(): string {
		return this._proposalTitle;
	}

	public set proposalTitle(value: string) {
		this._proposalTitle = value;
	}

	public get extension(): boolean {
		return this._extension;
	}

	public set extension(value: boolean) {
		this._extension = value;
	}

	public get extensionValue(): string {
		return this._extensionValue;
	}

	public set extensionValue(value: string) {
		this._extensionValue = value;
	}

	public get costShare(): boolean {
		return this._costShare;
	}

	public set costShare(value: boolean) {
		this._costShare = value;
	}

	public get donation(): boolean {
		return this._donation;
	}

	public set donation(value: boolean) {
		this._donation = value;
	}

	public get newEquipment(): boolean {
		return this._newEquipment;
	}

	public set newEquipment(value: boolean) {
		this._newEquipment = value;
	}

	public get typeOfEquipment(): string[] {
		return this._typeOfEquipment;
	}

	public set typeOfEquipment(value: string[]) {
		this._typeOfEquipment = value;
	}

	public get buildingLocation(): string {
		return this._buildingLocation;
	}

	public set buildingLocation(value: string) {
		this._buildingLocation = value;
	}

	public get amp(): boolean {
		return this._amp;
	}

	public set amp(value: boolean) {
		this._amp = value;
	}

	public get roomLocation(): string {
		return this._roomLocation;
	}

	public set roomLocation(value: string) {
		this._roomLocation = value;
	}

	public get companyDonating(): string {
		return this._companyDonating;
	}

	public set companyDonating(value: string) {
		this._companyDonating = value;
	}

	public get previousUse(): string {
		return this._previousUse;
	}

	public set previousUse(value: string) {
		this._previousUse = value;
	}

	public get spaceModificationRequirement(): boolean {
		return this._spaceModificationRequirement;
	}

	public set spaceModificationRequirement(value: boolean) {
		this._spaceModificationRequirement = value;
	}

	public get electricalModification(): boolean {
		return this._electricalModification;
	}

	public set electricalModification(value: boolean) {
		this._electricalModification = value;
	}

	public get volts(): boolean {
		return this._volts;
	}

	public set volts(value: boolean) {
		this._volts = value;
	}

	public get phase(): boolean {
		return this._phase;
	}

	public set phase(value: boolean) {
		this._phase = value;
	}

	public get dedicatedPower(): boolean {
		return this._dedicatedPower;
	}

	public set dedicatedPower(value: boolean) {
		this._dedicatedPower = value;
	}

	public get circuitBreakerSpecification(): boolean {
		return this._circuitBreakerSpecification;
	}

	public set circuitBreakerSpecification(value: boolean) {
		this._circuitBreakerSpecification = value;
	}

	public get motorCompressorSpecification(): boolean {
		return this._motorCompressorSpecification;
	}

	public set motorCompressorSpecification(value: boolean) {
		this._motorCompressorSpecification = value;
	}

	public get specialNeeds(): boolean {
		return this._specialNeeds;
	}

	public set specialNeeds(value: boolean) {
		this._specialNeeds = value;
	}

	public get FWR(): boolean {
		return this._fwr;
	}

	public set FWR(value: boolean) {
		this._fwr = value;
	}

	public get specialNeedsstring(): string {
		return this._specialNeedsString;
	}

	public set specialNeedsstring(value: string) {
		this._specialNeedsString = value;
	}

	public get fwrPaidBy(): string {
		return this._fwrPaidBy;
	}

	public set fwrPaidBy(value: string) {
		this._fwrPaidBy = value;
	}

	public get hvac(): boolean {
		return this._hvac;
	}

	public set hvac(value: boolean) {
		this._hvac = value;
	}

	public get airChilledWaterFlow(): boolean {
		return this._airChilledWaterFlow;
	}

	public set airChilledWaterFlow(value: boolean) {
		this._airChilledWaterFlow = value;
	}

	public get temperature(): boolean {
		return this._temperature;
	}

	public set temperature(value: boolean) {
		this._temperature = value;
	}

	public get humidityControl(): boolean {
		return this._humidityControl;
	}

	public set humidityControl(value: boolean) {
		this._humidityControl = value;
	}

	public get supplyPressure(): boolean {
		return this._supplyPressure;
	}

	public set supplyPressure(value: boolean) {
		this._supplyPressure = value;
	}

	public get centralPackageUnit(): boolean {
		return this._centralPackageUnit;
	}

	public set centralPackageUnit(value: boolean) {
		this._centralPackageUnit = value;
	}

	public get specialWork(): boolean {
		return this._specialWork;
	}

	public set specialWork(value: boolean) {
		this._specialWork = value;
	}

	public get noiseRequirement(): boolean {
		return this._noiseRequirement;
	}

	public set noiseRequirement(value: boolean) {
		this._noiseRequirement = value;
	}

	public get plumbing(): boolean {
		return this._plumbing;
	}

	public set plumbing(value: boolean) {
		this._plumbing = value;
	}

	public get fluid(): boolean {
		return this._fluid;
	}

	public set fluid(value: boolean) {
		this._fluid = value;
	}

	public get flowRate(): boolean {
		return this._flowRate;
	}

	public set flowRate(value: boolean) {
		this._flowRate = value;
	}

	public get pressure(): boolean {
		return this._pressure;
	}

	public set pressure(value: boolean) {
		this._pressure = value;
	}

	public get fluidTemperature(): boolean {
		return this._fluidTemperature;
	}

	public set fluidTemperature(value: boolean) {
		this._fluidTemperature = value;
	}

	public get pumpCompressorMotor(): boolean {
		return this._pumpCompressorMotor;
	}

	public set pumpCompressorMotor(value: boolean) {
		this._pumpCompressorMotor = value;
	}

	public get maintenance(): boolean {
		return this._maintenance;
	}

	public set maintenance(value: boolean) {
		this._maintenance = value;
	}

	public get licenseRequirements(): boolean {
		return this._licenseRequirements;
	}

	public set licenseRequirements(value: boolean) {
		this._licenseRequirements = value;
	}

	public get hardware(): boolean {
		return this._hardware;
	}

	public set hardware(value: boolean) {
		this._hardware = value;
	}

	public get hazardousMaterial(): boolean {
		return this._hazardousMaterial;
	}

	public set hazardousMaterial(value: boolean) {
		this._hazardousMaterial = value;
	}

	public get chemicals(): any[] {
		return this._chemicals;
	}

	public set chemicals(value: any[]) {
		this._chemicals = value;
	}

	public get radiationUse(): string {
		return this._radiationUse;
	}

	public set radiationUse(value: string) {
		this._radiationUse = value;
	}

	public get maintenanceRequirement(): boolean {
		return this._maintenanceRequirement;
	}

	public set maintenanceRequirement(value: boolean) {
		this._maintenanceRequirement = value;
	}

	public get listOfRequirements(): string[] {
		return this._listOfRequirements;
	}

	public set listOfRequirements(value: string[]) {
		this._listOfRequirements = value;
	}

	public get sizeOfEquipment(): boolean {
		return this._sizeOfEquipment;
	}

	public set sizeOfEquipment(value: boolean) {
		this._sizeOfEquipment = value;
	}

	public get height(): number {
		return this._height;
	}

	public set height(value: number) {
		this._height = value;
	}

	public get width(): number {
		return this._width;
	}

	public set width(value: number) {
		this._width = value;
	}

	public get length(): number {
		return this._length;
	}

	public set length(value: number) {
		this._length = value;
	}

	public get directorOfResearchDevelopmentSignature(): any {
		return this._directorOfResearchDevelopmentSignature;
	}

	public set directorOfResearchDevelopmentSignature(value: any) {
		this._directorOfResearchDevelopmentSignature = value;
	}

	public get directorOfResearchDevelopmentSignatureDate(): Date {
		return this._directorOfResearchDevelopmentSignatureDate;
	}

	public set directorOfResearchDevelopmentSignatureDate(value: Date) {
		this._directorOfResearchDevelopmentSignatureDate = value;
	}

	public get directorOfFacilitiesServicesSignature(): any {
		return this._directorOfFacilitiesServicesSignature;
	}

	public set directorOfFacilitiesServicesSignature(value: any) {
		this._directorOfFacilitiesServicesSignature = value;
	}

	public get directorOfFacilitiesServicesSignatureDate(): Date {
		return this._directorOfFacilitiesServicesSignatureDate;
	}

	public set directorOfFacilitiesServicesSignatureDate(value: Date) {
		this._directorOfFacilitiesServicesSignatureDate = value;
	}

	public get grantAgency(): string {
		return this._grantAgency;
	}

	public set grantAgency(value: string) {
		this._grantAgency = value;
	}

	public get network(): boolean {
		return this._network;
	}

	public set network(value: boolean) {
		this._network = value;
	}


}