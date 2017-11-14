export interface ApprovalForm {
    //1-4
    id:String;
    projectTitle:String;
    piName:String;
    email:String;
    college:String;
    deadlineDate:Date;
    preparedDate:Date;
    preparedBy:String;
    // 5
	// need help
	// 6
    additionalSpace: Boolean;
    vertebrateAnimal:Boolean;
    biologicalHazard:Boolean;
    conflictOfInterestStatement:Boolean;
    humanSubjects:Boolean;
    radiologicalHazards:Boolean;
    computerEquipment:Boolean;
    recombinantDNA:Boolean;
    additionalSpaceApproved:String;
    vertebrateAnimalApproved:String;
    biologicalHazardsApproved:String;
    conflictOfInterestStatementApproved:String;
    humanSubjectsApproved:String;
    radiologicalHazardsApproved:String;
    computerEquipmentApproved:String;
    recombinantDNAApproved:String;
    //7
    piSignature:any;//signature
    piSignatureDate:Date;
    chairSignature:any;//signature
    chairSignatureDate:Date;
    collegeDeanSignature:String;
    collegeDeanSignatureDate:Date;
    //UCS
    universityCostSharing:Boolean;
    provostAndVPForAcademicAffairs:any;//signature;
    provostAndVPForAcademicAffairsSignature:Date;
    deanOfCollegeOrDesignee:any;//Signature
    deanOfCollegeOrDesigneeSignature:Date;
    //8
    directorSignature:any;//signature
    directorSignatureDate:Date;
    avpSignature:any;//signature
    avpSignatureDate:Date;
    UASExecDirectorSignature:any;//signature
    UASExecDirectorSignatureDate:Date;
    chiefFinancialOfficerSignature:any;//signature
    chiefFinancialOfficerSignatureDate:Date;
    //9
    costSharingRequired:boolean;
    costSharingColleges:any[];//approvalcollege type
    totalOfColleges:Number;
    calStateLACostSharing:Number;
    unRecoveredFACostSharing:Number;
    unRecoveredFAMTDC:Number;
    thirdPartyCostShare:Number;
    totalCalStateLACostSharing:Number;
    totalProposalCostSharing:Number;
    internalNotes: String[];
    //10
    proposalPersonnelSignature:any;//signature
    departmentChairSignature:any; //signature
    departmentChairSignatureDate:Date;
    deanSignature:any; //signature
    deanSignatureDate:Date;
    //11
    uasProjectId:String;
    proposalCode:String;
    coPis:String[];
    typeOfProposal:String;
    typeOfGrantContracts:String;
    purposeOfProject:String;
    cfdaNumber:Number;
    //
}