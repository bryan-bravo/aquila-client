export class EquipmentForm {
    id:string;
    //1
    facultyName: string;
    department: string;//might handle
    grantAgency: string;
    proposalTitle: string;
    extension: boolean;
    extensionValue: string;
    costShare: boolean;
    donation: boolean;
    newEquipment: boolean;
    //2
    typeOfEquipment: string[];//might become an class
    buildingLocation: string;
    roomLocation: string;
    companyDonating: string;
    previousUse: string;
    //3
    spaceModificationRequirement: boolean; 
    electricalModification: boolean;
    volts: boolean;
    amps: boolean;
    phase: boolean;
    dedicatedPower: boolean;
    circuitBreakerSpecification: boolean;
    motorCompressorSpecification: boolean;
    specialNeeds: boolean;
    specialNeedsString: string;
    FWR: boolean;
    fwrPaidBy: string;
    hvac: boolean;
    airChilledWaterFlow: boolean;
    temperature: boolean;
    humidityControl: boolean;
    supplyPressure: boolean;
    centralPackageUnit: boolean;
    specialWork: boolean;
    noiseRequirement: boolean;
    plumbing: boolean;
    fluid: boolean;
    flowRate: boolean;
    pressure: boolean;
    fluidTemperature: boolean;
    pumpCompressorMotor: boolean;
    //network:boolean;
    maintenance: boolean;
    licenseRequirements: boolean;
    hardware: boolean;
    hazardousMaterial: boolean;
    chemicals: Map<number,string>;
    radiationUse: string;
    maintenanceRequirement: boolean;
    listOfRequirements:string[];
    sizeOfEquipment: boolean;
    height: number;
    width: number;
    length: number;
    directorOfResearchDevelopmentSignature:any;//Signature
    directorOfResearchDevelopmentSignatureDate:Date;
    directorOfFacilitiesServicesSignature:any;//Signature
    directorOfFacilitiesServicesSignatureDate:Date;
	constructor(id){
		this.id=id;
	}
}