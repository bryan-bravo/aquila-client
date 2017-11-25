import { BudgetFile } from './BudgetFile';
import { ApprovalForm } from './ApprovalForm';
import{TimeLine} from './TimeLine';
import { IntakeForm } from './IntakeForm';
import{EquipmentForm} from './EquipmentForm';
export class Proposal{
intakeForm:IntakeForm
budgetFile:BudgetFile;
approvalForm:ApprovalForm;
timeLine:TimeLine;
equipmentForm?:EquipmentForm;
//do the rest of the forms
}