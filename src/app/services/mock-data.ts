export var Users: any[] = [
  {
    id: 1,
    username: 'Aquaman',
    password: 'bork',
    firstName: 'Arthur',
    lastName: 'Curry',
    email: 'text@email.com',
    phone: '22222222'
  },
  {
    id: 2,
    username: 'Wonderwoman',
    password: 'bork',
    firstName: 'Diana',
    lastName: 'Prince',
    email: 'text1@email.com',
    phone: '22222222'
  },
  {
    id: 3,
    username: 'Batman',
    password: 'bork',
    firstName: 'Bruce',
    lastName: 'Wayne',
    email: 'text2@email.com',
    phone: '22222222'
  },
  {
    id: 4,
    username: 'Superman',
    password: 'bork',
    firstName: 'Clark',
    lastName: 'Kent',
    email: 'text3@email.com',
    phone: '22222222'
  },{
    email:'bork@email.com',
    password:'bork'
  }

];

export var Proposals :any[]=[
{
'id':'0',
'proposalName':'Bat Cave',
'dateCreated': new Date(),
'status':'draft',
'user':  {
  id: 3,
  username: 'Batman',
  password: 'bork',
  firstName: 'Bruce',
  lastName: 'Wayne',
  email: 'text2@email.com',
  phone: '22222222'
  },
requiredForms:['intake','budget']
},
{
  'id':'1',
  'proposalName':'Bat Mobile',
  'dateCreated': new Date(),
  'status':'draft',
  'user':  {
    id: 3,
    username: 'Batman',
    password: 'bork',
    firstName: 'Bruce',
    lastName: 'Wayne',
    email: 'text2@email.com',
    phone: '22222222'
    },
  requiredForms:['intake','budget']
  },
{
  'id':'2',
'proposalName':'Atlantis',
'dateCreated': new Date(),
'status':'draft',
'user':  {
  id: 1,
  username: 'Aquaman',
  password: 'bork',
  firstName: 'Arthur',
  lastName: 'Curry',
  email: 'text@email.com',
  phone: '22222222'
  },
requiredForms:['intake','budget','equipment']
}
];
	// private _intakeForm:IntakeForm;