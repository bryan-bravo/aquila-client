export class EquipmentForm {
    id: string;
    facultyName: string;
    department: string;
    proposalTitle: string;
    extension: boolean;
    extensionValue: string;
    costShare: boolean;
    donation: boolean;
    newEquipment: boolean;
    typeOfEquipment: TypeOfEquipment[];
    buildingLocation: string;
    roomLocation: string;
    companyDonating: string;
    previousUse: string;
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
    maintenance: boolean;
    licenseRequirements: boolean;
    hardware: boolean;
    hazardousMaterial: boolean;
    chemicals: any;
    radiation: any;
    maintenanceRequirement: boolean;
    maintenanceRequirements: string; // list of strings
    sizeOfEquipment: boolean; // list of size requirements
    height: number;
    width: number;
    length: number;
    directorOfResearchDevelopmentSignature: any; //Signature
    directorOfResearchDevelopmentSignatureDate: Date;
    directorOfFacilitiesServicesSignature: any; //Signature
    directorOfFacilitiesServicesSignatureDate: Date;
}
export class TypeOfEquipment {
    id: number;
    name: string;
    specification: string;
    url: string;
}
export class MapEntry {
    key: string;
    value: string;
}

