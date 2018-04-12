import { Proposal } from './Proposal';
export class IntakeForm {
id: string;
complete: boolean;
// A
principleInvestigator: string;
department: string;
college: string;//can be found from department
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
laboratoryAssistance: boolean;
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
subgrantsOrSubcontracts: SubgrantSubProject[];
// E
projectLocations: ProjectLocation[];
// F
additionalPartiesInvolved: AdditionalPartiesInvolved[];
// G
agencyCostRatePercentage: number;
agencyCostSharing: boolean;
piCostSharing: boolean;
computersRequested: number;
requestedEquipment: any; // Map<string,number>;
// H
space: Space[]; // spaces
// I
hazardousSubstances: any; // Map<string,string>;
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
duplicationfFinalDocumentPackage: boolean; // fix
noOfCopies: number;
// L
projectSummary: string;
proposal: Proposal;
}
 export class Personnel {
    name: string;
    employer: string;
    positionTitleOnGrant: string;
    units: string;
}

export class SubgrantSubProject {
    institution: string;
    proposedFundingAmount: number;
    contactPersonName: string;
    contactInfo: string;
}
export class ProjectLocation {
    siteName: string;
    siteAddress: string;
    projectedPercentOfTimeAtSite: string;
    agreementArranged: boolean;
}
export class AdditionalPartiesInvolved {
    partyName: string;
    supervisor: string;
    explanationOfInvolvement: string;
}
export class Space {
    item: string;
    typeOfUse: string;
    sourceOfFunds: string;
}
export class MapEntry {
    key: string;
    value: any;
}
