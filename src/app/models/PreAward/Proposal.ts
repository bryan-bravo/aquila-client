import { IntakeForm } from './IntakeForm';
import { User } from '../User';
import { TimeLine } from './TimeLine';

export class Proposal {
   id: number;
   proposalName: string;
   dateCreated: Date;
   status: string;
   user: User;
   requiredForms: string[];
   intakeForm: IntakeForm;
   timeline: TimeLine;
   equipmentForm: any;
   economicInterestPI: any;
//    intakeForm: any;
//    timeline: any;
}
