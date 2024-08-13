import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form/form.component';
import { JobPostComponent } from './job-post/job-post.component';
import { DropdownModule } from 'primeng/dropdown';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicantTableComponent } from './applicant-table/applicant-table.component';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ShortlistedCandidateAccountComponent } from './shortlisted-candidate-account/shortlisted-candidate-account.component';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { MaxWordsDirective } from './directives/max-words.directive';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CandidatePersonalProfileComponent } from './candidate-personal-profile/candidate-personal-profile.component';
import { DividerModule } from 'primeng/divider';
import { SlidersComponent } from './sliders/sliders.component';
import { PanelModule } from 'primeng/panel';
import { SliderModule } from 'primeng/slider';
import { ShortlistedCardComponent } from './shortlisted-card/shortlisted-card.component';
import { CommentsComponent } from './comments/comments.component';
import { EditorModule } from 'primeng/editor';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartModule } from 'primeng/chart';
import { KnobModule } from 'primeng/knob';
import { SlidersService } from './sliders.service';
import { UserOpeningComponent } from './user-opening/user-opening.component';
import { CalendarModule } from 'primeng/calendar';

 
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    ApplicantsComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    FormComponent,
    ApplicantTableComponent,
    ShortlistedCandidateAccountComponent,
    MaxWordsDirective,
    CandidatePersonalProfileComponent,
    SlidersComponent,
    ShortlistedCardComponent,
    CommentsComponent,
    PieChartComponent,
    UserOpeningComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    JobPostComponent,
    InputTextModule,
    TagModule,
    BrowserAnimationsModule,
    DialogModule,
    AvatarGroupModule,
    AvatarModule,
    FormsModule,
    CardModule,
    HttpClientModule,
    FileUploadModule,
    InputTextareaModule,
    DividerModule,
    PanelModule,
    SliderModule,
    EditorModule,
    ChartModule,
    KnobModule,
    CalendarModule
  
  ],
  providers: [provideAnimations(),SlidersService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
