export class IntakeForm {
id: string;
complete: boolean;
// A
principalInvestigator: string;
department: string;
// _college?:string;//can be found from department
projectTitle: string;
proposedFundingAmount: string;
startDate: Date;
endDate: Date;
// B
personnel: Personnel[]; // personnel object
// C
anticipateStipend: boolean;
stipend: string; // stipends
facultyStudentResearchCreativeActivities: boolean;
studentsInvolved: boolean;
noOfUndergradStudents: number;
noOfGradStudents: number;
laboratoryAssitance: boolean;
dataCollection: boolean;
reportWriting: boolean;
literatureReview: boolean;
codingOrDataEntry: boolean;
presentations: boolean;
archivalResearch: boolean;
dataAnalysis: boolean;
otherActivities: boolean;
otherActivitiesList: string[];
// D
subGrantsOrSubContracts: SubgrantSubProject[];
// E
projectLocations: ProjectLocation[];
// F
additionalPartiesInvolved: AdditionalParty[];
// G
agencyCostRatePercentage: number;
agencyCostSharing: boolean;
piCostSharing: boolean;
computersRequested: number;
requestedEquipment: RequestedEquipment[]; // map<string:name,double:cost>
// H
space: Space[]; // spaces
// I
hazardousSubstances: Hazard[]; // <string:agent,string:type>
// J
humanSubjects: boolean;
vertebrateAnimals: boolean;
questionnaireField: string;
cipCategoryTitle: string;
cipClassification: string;
// K
assistanceWithProposalDevelopment: boolean;
technicalAssistance: boolean;
letterOfSupportPresident: boolean;
letterOfSupportProvost: boolean;
letterOfSupportAssocVPOfResearch: boolean;
duplicationfFinalDocumentPackage: boolean;
noOfCopies: number;
// L
projectSummary: string;
} 
 export class Personnel {
    name: string;
    employer: string;
    positionTitleOnGrant: string;
    units: string;

}

export class SubgrantSubProject {
    institutionName: string;
    proposedFundingAmount: number;
    contactPerson: string;
    contactInfo: string;
}
export class ProjectLocation {
    siteName: string;
    siteAddress: string;
    projectedPercentOfTimeAtState: string;
    onCampusSpaceOrOnCampusRentalNeeded: boolean;
}
export class AdditionalParty {
    partyName: string;
    supervisor: string;
    explanationOfInvolvement: string;
}
export class Space {
    item: string;
    newSpace: string;
    sourceOfFunds: string;
}
export class Hazard {
  agent: string;
  type: string;
}
export class RequestedEquipment {
    namestring;
    approximateCostnumber;
}