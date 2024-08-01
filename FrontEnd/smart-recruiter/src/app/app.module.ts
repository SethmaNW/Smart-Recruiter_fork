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
 
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    ApplicantsComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    FormComponent,
    ApplicantTableComponent
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
    CardModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
