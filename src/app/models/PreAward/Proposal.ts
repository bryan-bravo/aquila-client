import { IntakeForm } from './IntakeForm';
import { User } from '../User';

export class Proposal {
   id: number;
   proposalName: string;
   dateCreated: Date;
   status: string;
   user: User;
   requiredForms: string[];
   intakeForm:any;
}
