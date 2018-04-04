import { User } from "../User";

export class ApprovalForm {
    //1-4
    id: string;
    progress: number;
    projectTitle: string;
    pIName: User; //object User
    email: string;
    college: string; //object College
    department: string; //object Department
    deadlineDate: Date;
    preparedDate: Date;
    preparedBy: string;
    // 5
	// need help
	// 6
    additionalSpace: boolean;
    vertebrateAnimal: boolean;
    biologicalHazards: boolean;
    conflictOfInterestStatement: boolean;
    humanSubjects: boolean;
    radiologicalHazards: boolean;
    computerEquipment: boolean;
    recombinantDNA: boolean;
    additionalSpaceApproved: string;
    vertebrateAnimalApproved: string;
    biologicalHazardsApproved: string;
    conflictOfInterestStatementApproved: string;
    humanSubjectsApproved: string;
    radiologicalHazardsApproved: string;
    computerEquipmentApproved: string;
    recombinantDNAApproved: string;
    //7
    piSignature: any;//signature
    piSignatureDate: Date;
    chairSignature: any;//signature
    chairSignatureDate: Date;
    collegeDeanSignature: string;
    collegeDeanSignatureDate: Date;
    //UCS
    universityCostSharing: boolean;
    provostAndVPForAcademicAffairs: any;//signature;
    provostAndVPForAcademicAffairsSignature: Date;
    deanOfCollegeOrDesignee: any;//Signature
    deanOfCollegeOrDesigneeSignature: Date;
    //8
    directorSignature: any;//signature
    directorSignatureDate: Date;
    avpSignature: any;//signature
    avpSignatureDate: Date;
    UASExecDirectorSignature: any;//signature
    UASExecDirectorSignatureDate: Date;
    chiefFinancialOfficerSignature: any;//signature
    chiefFinancialOfficerSignatureDate: Date;
    //9
    costSharingRequired: boolean;
    costSharingColleges: any[];//approvalcollege type
    totalOfColleges: number;
    calStateLACostSharing: number;
    unRecoveredFACostSharing: number;
    unRecoveredFAMTDC: number;
    thirdPartyCostShare: number;
    totalCalStateLACostSharing: number;
    totalProposalCostSharing: number;
    internalNotes: string[];
    //10
    proposalPersonnelSignature: any;//signature
    departmentChairSignature: any; //signature
    departmentChairSignatureDate: Date;
    deanSignature: any; //signature
    deanSignatureDate: Date;
    //11
    uasProjectId: string;
    proposalCode: string;
    coPis: string[];
    typeOfProposal: string;
    typeOfGrantContracts: string;
    purposeOfProject: string;
    cfdanumber: number;
    //
    constructor(id){
    this.id=id;
    }
}