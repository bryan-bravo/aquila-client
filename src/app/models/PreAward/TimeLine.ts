 export class TimeLine {
     id: number;
     principalInvestigator: any; // User
     coPi: any[]; // Users
     proposalName: string;
     fundingAgency: string;
     uasDueDate: Date;
     sponsorDueDate: Date;
     finalSign: Date;
     stages: Stage[];
}
export class Stage {
    id: number;
    name: string;
    expectedDate: Date;
    completedDate: Date;
    uasReviewRequired: boolean;
    uasReviewed: boolean;
    requiredForms: any;
    requiredFiles: any; // name, file representation 
    additionalNotes: string;
    stageOrder: number;

}
export class FileInfo {
    id: number;
    nameOfUploader: string;
    fileName: string;
    fileType: string;
    filePath: string;
    uploadDate: string;
}
