import { Component, OnInit, ViewChild } from '@angular/core';
import {FileUpload} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @ViewChild('name') fileInput: FileUpload;
  constructor(private messageService: MessageService) { }

  ngOnInit() {

  }
  select() {
    console.log('selected')
  }
  myUploader(event) {
        this.messageService.add({severity: 'success', summary: 'File Uploaded', detail: 'Via MessageService'});
        this.fileInput.clear();

      }
  //   this.preAwardService.uploadFile(this.proposalId, this.stage.id, file.key, event.files[0])
  //     .subscribe(response => {
  //       file.value = response;
  //       this.messageService.add({severity: 'success', summary: 'File Uploaded', detail: 'Via MessageService'});
  //     });
  // }

}
