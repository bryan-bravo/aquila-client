import { IntakeForm } from './IntakeForm';
import { User } from '../User';
export class Proposal {
  private _id: number;
  private _proposalName: string;
  private _dateCreated: Date;
  private _status: string;
  private _user: User;
  private _requiredForms: string[];
  private _intakeForm: IntakeForm;

	constructor(
		id: number, 
		proposalName: string, 
		dateCreated?: Date, 
		status?: string, 
		user?: User, 
		requiredForms?: string[], 
		intakeForm?: IntakeForm) 
		{
		this._id = id;
		this._proposalName = proposalName;
		this._dateCreated = dateCreated;
		this._status = status;
		this._user = user;
		this._requiredForms = requiredForms;
		this._intakeForm = intakeForm;
	}

	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}

	public get proposalName(): string {
		return this._proposalName;
	}

	public set proposalName(value: string) {
		this._proposalName = value;
	}

	public get dateCreated(): Date {
		return this._dateCreated;
	}

	public set dateCreated(value: Date) {
		this._dateCreated = value;
	}

	public get status(): string {
		return this._status;
	}

	public set status(value: string) {
		this._status = value;
	}

	public get user(): User {
		return this._user;
	}

	public set user(value: User) {
		this._user = value;
	}

	public get requiredForms(): string[] {
		return this._requiredForms;
	}

	public set requiredForms(value: string[]) {
		this._requiredForms = value;
	}

	public get intakeForm(): IntakeForm {
		return this._intakeForm;
	}

	public set intakeForm(value: IntakeForm) {
		this._intakeForm = value;
	}

}