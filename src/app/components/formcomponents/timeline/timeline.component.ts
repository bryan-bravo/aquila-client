import { Component, OnInit, AfterViewInit, Directive, QueryList, ViewChildren} from '@angular/core';
import {trigger, transition, style, animate, query, stagger, keyframes} from '@angular/animations';
import {NgClass, NgStyle} from '@angular/common';
import {MessageService} from 'primeng/components/common/messageservice';
import {FileUpload} from 'primeng/primeng';
import { saveAs } from 'file-saver/FileSaver';
import {TimeLine, Stage, FileInfo} from '../../../models/PreAward/TimeLine';
import { PreawardService } from '../../../services/preaward.service';
import { ProposalService } from '../../../services/proposal.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {KeysPipe} from '../../../pipes/keys.pipe';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  animations: [
    trigger('stageAnimation', [
      transition('* => *', [
        query('li', style({ transform: 'translateY(-100%)', opacity: '0'})),
        query('li',
          stagger('200ms', [
            animate('300ms', style({ transform: 'translateY(0)', opacity: '1'}))
        ]))
      ])
    ]),
    trigger('view-stage', [
      // state(),
        transition('void => *', [
          style({transform: 'translateX(-100%)'}),
          animate(500, style({transform: 'translateX(0)'}))
        ]),
        transition('* => void', [
          animate(500, style({opacity: '0'}))
        ])
      ]),
    trigger('edit-stage', [
      // state(),
        transition('void => *', [
          style({opacity: '1'}),
          animate(500, style({opacity: '0'}))
        ])
      ])
  ]
})
export class TimelineComponent implements OnInit {
  @ViewChildren(FileUpload) fileUploads: QueryList<FileUpload>;
  user: any;
  timeline: TimeLine;
  proposalId: number;
  stage: Stage; // stage to be manipulated for edit and new
  stageIndex: number;
  editingNewStage: boolean;
  dragging: boolean;
  draggingOverTimeline: boolean;
  dialogType: string; // view, edit/add
  showProgressBar: boolean;
  preAwardForms: string[] =
  ['Intake Form', 'Equipment form', 'Approval Form',
  'COI Other Investigator/Key Personnel PHS',
  'COI Other Investigator/Key Personnel NONPHS',
  'COI Principal Investigator PHS',
  'COI Principal Investigator NONPHS',
  'Statement Of Economic Interest',
 ];
 unSelectedForms: string[];
  constructor(private messageService: MessageService,
              private preAwardService: PreawardService,
              private proposalService: ProposalService,
              private authService: AuthenticationService,
              private keysPipe: KeysPipe
    ) {
      this.populateTimeLine();
    }

  ngOnInit() {
    this.dialogType = 'view-basic-timeline';
    this.user = this.authService.getUserData();
  }
  // timeline
  populateTimeLine() {
    const obj = this.proposalService.getTimeline();
    this.timeline = this.parseDates(obj.timeline);
    // parse the object maps into iterables
    if (obj.timeline.stages[0].requiredForms.length == undefined) {
      this.timeline.stages.forEach((stage, i, stages) => {
          stages[i] = this.parseStage(stage);
      });
    }
    this.dragging = false;
    this.draggingOverTimeline = false;
    this.proposalId = obj.proposalId;
    this.showProgressBar = false;
  }
  saveTimeline() {
    if (this.timeline.stages.length === 1) {
      // have to parse the pre meeting stages, req forms and files
      const timelineCopy = Object.assign({}, this.timeline);
        timelineCopy.stages[0].requiredForms = this.keysPipe.backToObject(timelineCopy.stages[0].requiredForms);
        timelineCopy.stages[0].requiredFiles = this.keysPipe.backToObject(timelineCopy.stages[0].requiredFiles)
        this.showProgressBar = true;
        this.preAwardService.putTimeline(this.proposalId, timelineCopy).subscribe( timeline => {
        timeline = this.parseDates(timeline);
        timeline.stages.forEach((stage, i, stages) => {
            stages[i] = this.parseStage(stage);
        });
        this.timeline = timeline;
        this.showProgressBar = false;
        this.messageService.add({severity: 'success', summary: 'Service Message'});
      });
    } else {
      // making patch request
      this.preAwardService.patchTimeline(this.proposalId, this.timeline).subscribe(timeline => {
        this.timeline.fundingAgency = timeline.fundingAgency;
        if (timeline.uasDueDate) {
          this.timeline.uasDueDate = new Date(timeline.uasDueDate);
        } else {
          this.timeline.uasDueDate = timeline.uasDueDate;
        }        if (timeline.sponsorDueDate) {
          this.timeline.sponsorDueDate = new Date(timeline.sponsorDueDate);
        } else {
          this.timeline.sponsorDueDate = timeline.sponsorDueDate;
        }
        if (timeline.finalSign) {
          this.timeline.finalSign = new Date(timeline.finalSign);
        } else {
          this.timeline.finalSign = timeline.finalSign;
        }
        this.messageService.add({severity:'success', summary:'Service Message'});
      });
    }
  }
  // stage
  handleAddStage() {
    this.showProgressBar = true;
    this.preAwardService.createStage(this.timeline.id).subscribe( (stage) => {
      this.stage = this.parseStage(stage);
      this.timeline.stages.push(stage);
      this.setDialogType('edit-stage');
      this.showProgressBar = false;
      this.messageService.add({severity:'success', summary:'Stage Added'});
      this.stageIndex = this.timeline.stages.length - 1;
    });
  }
  saveStage() {
    const stage = Object.assign({}, this.stage);
    stage.requiredForms = this.keysPipe.backToObject(stage.requiredForms);
    stage.requiredFiles = this.keysPipe.backToObject(stage.requiredFiles);
    stage.stageOrder = this.getStageIndex(this.stage.id);
    this.showProgressBar = true;
    this.preAwardService.saveStage(this.timeline.id, stage).subscribe( (savedStage) => {
      this.stage = this.parseStage(savedStage);
      this.showProgressBar = false;
      this.messageService.add({severity:'success', summary:'Stage Saved'});
      // this.proposalService.
    });
  }
  sortStageIntoTimeline(indexToPush) {
    const currentStageIndex = this.getStageIndex(this.stage.id);
    console.log(`stage index ${currentStageIndex} index to pushh ${indexToPush}`)
    if (indexToPush !== currentStageIndex || indexToPush !== currentStageIndex + 1){
      this.showProgressBar = true;
      this.preAwardService.reorderStage(this.stage.id, indexToPush).subscribe( response => {
       if (indexToPush === 0) {
          this.timeline.stages.splice(currentStageIndex, 1);
          this.timeline.stages.unshift(this.stage);
        } else if (indexToPush == this.timeline.stages.length) {
          this.timeline.stages.splice(currentStageIndex, 1);
          this.timeline.stages.unshift(this.stage);
        } else {
          this.timeline.stages.splice(currentStageIndex, 1);
          this.timeline.stages.splice(indexToPush, 0, this.stage);
        }
        this.stageIndex = this.getStageIndex(this.stage.id);
        this.showProgressBar = false;
        this.messageService.add({severity: 'success', summary: 'Stage Reordered'});
      });
    } else {
      console.log("nope")
    }
  }
  deleteStage() {
    // make delete request if successful, sort stage orders, update stage orders
    this.showProgressBar = true;
    this.preAwardService.deleteStage(this.stage.id).subscribe( response => {
      // if successful
      const currentStageIndex = this.timeline.stages.findIndex( (stage) => {
        return this.stage == stage;
      });
      this.timeline.stages.splice(currentStageIndex,  1);
      this.setDialogType('view-basic-timeline');
      this.showProgressBar = false;
      this.messageService.add({severity:'success', summary:'Stage Deleted'});
    });
  }
  // forms
  populateunSelectedForms() {
    this.unSelectedForms = this.preAwardForms.filter( preAwardForm => {
      return this.stage.requiredForms.findIndex(form => {
        return form.key === preAwardForm;
      }) == -1;
    });
  }
  handleAddForm(form) {
    this.stage.requiredForms.push({'key': form, 'value': null});
    this.populateunSelectedForms();
  }
  handleRemoveForm(form) {
    const index = this.stage.requiredForms.findIndex(reqForm => {
      return reqForm === form;
    });
    this.stage.requiredForms.splice(index, 1);
    // set unselectedForms
    this.populateunSelectedForms();
  }
  // files
  handleAddFile(fileName) {
    const duplicate = this.stage.requiredFiles.findIndex((file) => {
      return file.key === fileName;
    });
    if (duplicate !== -1) {
      // let the user know that its a duplicate
    } else {
      this.stage.requiredFiles.push({'key': fileName, 'value': null});
    }
  }
  handleRemoveFile(fileEntry) {
    const fileIndex = this.stage.requiredFiles.findIndex(reqFile => {
      return reqFile.key === fileEntry.key;
    });
    // the file info is already in the database
    if (fileEntry.value != null) {
      this.showProgressBar = true;
      this.preAwardService.deleteFile(this.timeline.id, this.stage.id, this.stage.requiredFiles[fileIndex].value.id)
      .subscribe(response => {
        this.showProgressBar = false;
        this.stage.requiredFiles.splice(fileIndex, 1);
      });
    } else {
      this.stage.requiredFiles.splice(fileIndex, 1);
    }
  }
  myUploader(event, file) {
    this.showProgressBar = true;
    this.preAwardService.uploadFile(this.proposalId, file.value.id, event.files[0])
      .subscribe(response => {
        // have to clear the files on upload element
        file.value = response;
        this.showProgressBar = false;
        this.messageService.add({severity: 'success', summary: 'File Uploaded'});
        this.fileUploads.forEach(fileUpload => {
          fileUpload.clear();
        });
      });
  }
  downloadFile(file) {
    this.showProgressBar = true;
    this.preAwardService.downloadFile(file.value.id).subscribe( data => {
      const contentDisposition = data.headers.get('content-disposition');
      const contentType = data.headers.get('content-type');
      const fileName = contentDisposition.split('=')[1];
      saveAs(new Blob([data.body], { type: contentType }), fileName);
      this.showProgressBar = false;

    });
  }
  // for presentation delete
    submitForPending() {
      this.preAwardService.stageCheck(this.proposalId, this.stage.id).subscribe( message => {
        this.stage.uasReviewRequired = true;
        this.messageService.add({severity: 'success', summary: 'Stage Pending Review'});
      });
    }
  // helper functionss
  getCurrentStage(stageId) {
    const stageIndex = this.getStageIndex(stageId);
    this.stage = this.timeline.stages[stageIndex];
    this.stageIndex = stageIndex;
    this.setDialogType('');
    this.setDialogType('view-stage');
    // console.log(this.fileUploads)

  }
  getStageIndex(stageId) {
    const stageIndex = this.timeline.stages.findIndex((stage) => {
      return stage.id == stageId;
    });
    return stageIndex;
  }
  setDialogType(type) {
    this.dialogType = type;
    if (type === 'edit-stage') {
      this.populateunSelectedForms();
    } else if (type === 'view-basic-timeline') {
      this.stageIndex = null;
    }
  }
  setDragging(value) {
    this.dragging = value;
  }
  setDragOverTimeline(value) {
    this.draggingOverTimeline = value;
  }
  // handle drag and drop for stage in a timeline
  drop(obj) {
    obj.event.preventDefault();
    this.sortStageIntoTimeline(obj.index);
  }
  // hover element over drop zone
  allowDrop(event) {
    event.preventDefault();
  }
  // format data
  parseDates(timeline) {
    if (timeline.uasDueDate !== null) {
      timeline.uasDueDate = new Date (timeline.uasDueDate)
    }
    if (timeline.sponsorDueDate !== null) {
      timeline.sponsorDueDate = new Date (timeline.sponsorDueDate)
    }
    if (timeline.finalSign !== null) {
      timeline.finalSign = new Date (timeline.finalSign)
    }
    return timeline;
  }
  parseStage(stage) {
    if (stage.expectedDate !== null) {
      stage.expectedDate = new Date (stage.expectedDate);
    }
    if (stage.completedDate !== null) {
      stage.completedDate = new Date (stage.completedDate);
    }
    stage.requiredForms = this.keysPipe.transform(stage.requiredForms);
    stage.requiredFiles = this.keysPipe.transform(stage.requiredFiles);
    return stage;
  }
}

