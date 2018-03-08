 export class TimeLine {
     id: number;
     principleInvestigator: any; // User
     coPi: any[]; // Users
     proposalName: string;
     fundingAgency: string;
     uasDueDate: Date;
     sponsorDueDate: Date;
     finalSign: Date;
     stages: Stage[];
}
export class Stage {
    Id: number;
    name: string;
    expectedDate: Date;
    completedDate: Date;
    uasReviewRequired: boolean;
    uasReviewed: boolean;
    requiredForms: string[];
    requiredFiles: string[]; // name, file representation 
    additionalNotes: string;
    order: number;

}
export class FileInfo {
    id: number;
    nameOfUploader: string;
    fileName: string;
    fileType: string;
    filePath: string;
    uploadDate: string;
}
