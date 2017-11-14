export interface EquipmentForm {
    Id:String;
    facultyName:String;
    department:String;//might handle
    proposalTitle:String;
    extension:Boolean;
    extensionValue:String;
    costShare:Boolean;
    donation:Boolean;
    newEquipment:Boolean;
    typeOfEquipment:String[];
    buildingLocation:String;
    roomLocation:String;
    isDonation:Boolean;
    companyDonating:String;
    previousUse:String;
    spaceModificationRequirement:Boolean;
    electricalModification:Boolean;
    volts:Boolean;
    amp:Boolean;
    phase:boolean;
    dedicatedPower:Boolean;
    circuitBreakerSpecification:Boolean;
    motorCompressorSpecification:Boolean;
    specialNeeds:Boolean;
    FWR:Boolean;
    specialNeedsString:String;
    fwrPaidBy:String;
    hvac:Boolean;
    airChilledWaterFlow:Boolean;
    temperature:Boolean;
    humidityControl:Boolean;
    supplyPressure:Boolean;
    centralPackageUnit:Boolean;
    specialWork:Boolean;
    noiseRequirement:Boolean;
    plumbing:Boolean;
    fluid:Boolean;
    flowRate:Boolean;
    pressure:Boolean;
    fluidTemperature:Boolean;
    pumpCompressorMotor:Boolean;
    maintenance:Boolean;
    licenseRequirements:Boolean;
    hardware:Boolean;
    hazardousMaterial:Boolean;
    chemicals:any[];//map of <Integer,String>
    radiationUse:String;
    maintenanceRequirement:Boolean;
    listOfRequirements:String[];
    sizeOfEquipment:Boolean;
    height:Number;
    width:Number;
    length:Number;
    directorOfResearchDevelopmentSignature:any;//Signature
    directorOfResearchDevelopmentSignatureDate:Date;
    directorOfFacilitiesServicesSignature:any;//Signature
    directorOfFacilitiesServicesSignatureDate:Date;




}