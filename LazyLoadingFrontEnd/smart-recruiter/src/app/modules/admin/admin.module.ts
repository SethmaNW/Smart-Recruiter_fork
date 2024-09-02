import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { AdminRoutingModule } from './admin-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { RouterLink } from '@angular/router';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { ShortlistedCandidateAccountComponent } from './components/shortlisted-candidate-account/shortlisted-candidate-account.component';
import { ShortlistedCardComponent } from './components/shortlisted-card/shortlisted-card.component';
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { ApplicantsTableComponent } from './components/applicants-table/applicants-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SliderModule } from 'primeng/slider';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    JobPostComponent,
    ShortlistedCandidateAccountComponent,
    ShortlistedCardComponent,
    ApplicantsComponent,
    ApplicantsTableComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AdminRoutingModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    SharedModule,
    CardModule,
    TagModule,
    DropdownModule,
    RouterLink,
    DialogModule,
    ToastModule,
    TabViewModule,
    InputNumberModule,
    SliderModule,
    MultiSelectModule,
    InputTextModule,
    EditorModule
  ],
  providers: [ConfirmationService, provideAnimations()],
})
export class AdminModule { }
