
export const Users: any[] = [
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
  },
  {
    email: 'bork@email.com',
    password: 'bork'
  }

];
export const Timeline: any = {
   "id":"0",
   "proposal":"proposal",
   "fundingAgency": "NASA",
   "shippingDeadline": new Date(),
   "uASDate": new Date(),
   "sponsorDueDate": new Date(),
   "finalSign": new Date(),
   "shippingDate": new Date(),
   "piDueDates": [], // <string,Date>
   "orspDueDates": [],
   "piInitial": "initial",
   "analystInitial": "ainitial",
   "piSign": new Date(),
   "analystSign": new Date,
   "addComments": [],
   "stages": [
    {
      "Id": 0,
      "name": "Intake and Budget",
      "expectedDate": new Date(),
      "completedDate": new Date(),
      "uasReviewRequired":true,
      "uasReviewed": false,
      "deadlineType": "OSRP",
      "requiredForms": ['Intake', 'Equipment'],
      "requiredFiles": ['Budget'],
      "additionalNotes":"borrrrrrrrrrrsdf  sdfaf",
      "order":0
    },{ 
    "Id": 1,
    "name": "Equipment",
    "expectedDate": new Date(),
    "completedDate": new Date(),
    "uasReviewRequired":true,
    "uasReviewed": false,
    "deadlineType": "OSRP",
    "requiredForms": [],
    "requiredFiles": ['Budget'],
    "additionalNotes":"borrrrrrrrrrrsdf  sdfaf",
    "order":1
    }, {
    "Id": 2,
    "name": "bork",
    "expectedDate": new Date(),
    "completedDate": new Date(),
    "uasReviewRequired":true,
    "uasReviewed": false,
    "deadlineType": "OSRP",
    "requiredForms": [],
    "requiredFiles": ['Budget'],
    "additionalNotes":"borrrrrrrrrrrsdf  sdfaf",
    "order":2
  }
]
};
export const Proposals: any[] = [
  {
  "id": 1,
  "proposalName": "proposal 1",
  "dateCreated": "2018-01-12",
  "status": "Draft",
  "user": {
      "id": 1,
      "username": "bboayes",
      "password": "1234",
      "lastName": "boayes",
      "firstName": "berry",
      "email": "bboayes@email.com"
  },
  "intakeForm": {
      "id": 3,
      "principleInvestigator": "berry boayes",
      "department": null,
      "college": null,
      "projectTitle": "proposal 1",
      "proposedFundingAmount": null,
      "startDate": null,
      "endDate": null,
      "personnel": [],
      "subgrantsOrSubcontracts": [],
      "projectLocations": [],
      "additionalPartiesInvolved": [],
      "space": [],
      "otherActivitiesList": [],
      "requestedEquipment": {},
      "hazardousSubstances": {}
  }
},
{
  "id": 2,
  "proposalName": "proposal 2",
  "dateCreated": "2018-01-12",
  "status": "Draft",
  "user": {
      "id": 1,
      "username": "bboayes",
      "password": "1234",
      "lastName": "boayes",
      "firstName": "berry",
      "email": "bboayes@email.com"
  },
  "intakeForm": {
      "id": 5,
      "principleInvestigator": "berry boayes",
      "department": null,
      "college": null,
      "projectTitle": "proposal 2",
      "proposedFundingAmount": null,
      "startDate": null,
      "endDate": null,
      "personnel": [],
      "subgrantsOrSubcontracts": [],
      "projectLocations": [],
      "additionalPartiesInvolved": [],
      "space": [],
      "otherActivitiesList": [],
      "requestedEquipment": {},
      "hazardousSubstances": {}
  }
}
];
	// private _intakeForm:IntakeForm;