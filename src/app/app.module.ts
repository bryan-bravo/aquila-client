// core angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ngPrime
import {ButtonModule, PaginatorModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {StepsModule, MenubarModule, MenuItem} from 'primeng/primeng';
import {Header} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {MessageModule} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';
import {OverlayPanelModule} from 'primeng/primeng';
import {ProgressBarModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {CheckboxModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {ProgressSpinnerModule} from 'primeng/primeng';
import {ToggleButtonModule} from 'primeng/primeng';
// generated components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PiHomePageComponent } from './components/pihome-page/pihome-page.component';
import { LoginComponent } from './components/login/login.component';
import { EditProposalComponent } from './components/edit-proposal/edit-proposal.component';
import { IntakeComponent } from './components/formcomponents/intake/intake.component';
import { TimelineComponent } from './components/formcomponents/timeline/timeline.component';
import { PiPreAwardComponent } from './components/pi-pre-award/pi-pre-award.component';
import { EquipmentComponent } from './components/formcomponents/equipment/equipment.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { FormFooterComponent } from './components/form-footer/form-footer.component';
import { ConflictOfInterestComponent } from './components/formcomponents/coi/coi.component';
import { EconomicInterestComponent } from './components/formcomponents/economic-interest/economic-interest.component';
import { ProposalArchiveComponent } from './components/proposal-archive/proposal-archive.component';

// services
import {AuthenticationService} from './services/authentication.service';
import {PreawardService} from './services/preaward.service';
import {ProposalService} from './services/proposal.service';
import { MockDataService } from './services/mock-data.service';
import { ApprovalComponent } from './components/formcomponents/approval/approval.component';

// pipes
import {KeysPipe} from './pipes/keys.pipe';

// directives
import { TimelineBarDirective } from './directives/timeline-bar.directive';
import { TestComponent } from './components/test/test.component';

const AppRoutes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: PiHomePageComponent}, // will have can activate thing
    {path: 'pipreaward', component: PiPreAwardComponent} ,
    {path: 'editproposal/:id', component: EditProposalComponent},
    {path: 'test', component: TestComponent},
    {path: 'proposalarchive', component: ProposalArchiveComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingPageComponent,
    LoginComponent,
    PiHomePageComponent,
    EditProposalComponent,
    IntakeComponent,
    TimelineComponent,
    PiPreAwardComponent,
    EquipmentComponent,
    BreadCrumbComponent,
    FormFooterComponent,
    ConflictOfInterestComponent,
    EconomicInterestComponent,
    ApprovalComponent,
    KeysPipe,
    TimelineBarDirective,
    TestComponent,
    ProposalArchiveComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    OverlayPanelModule,
    CalendarModule,
    DataTableModule,
    DialogModule,
    CheckboxModule,
    FileUploadModule,
    MessagesModule,
    MessageModule,
    GrowlModule,
    ProgressSpinnerModule,
    ToggleButtonModule,
  ],
  providers: [
    AuthenticationService,
    PreawardService,
    ProposalService,
    MessageService,
    MockDataService,
    KeysPipe,
    TimelineBarDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
