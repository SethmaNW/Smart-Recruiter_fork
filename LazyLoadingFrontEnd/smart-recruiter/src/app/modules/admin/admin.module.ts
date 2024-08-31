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
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { ShortlistedCandidateAccountComponent } from './components/shortlisted-candidate-account/shortlisted-candidate-account.component';
import { ShortlistedCardComponent } from './components/shortlisted-card/shortlisted-card.component';
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { ApplicantsTableComponent } from './components/applicants-table/applicants-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


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
    FormsModule,
    AdminRoutingModule,
    SharedModule,
    CardModule,
    TagModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    ToastModule,
    MultiSelectModule,
    TabViewModule,
    InputNumberModule,
    SliderModule
  ],
  providers: [ConfirmationService],
})
export class AdminModule { }
