import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { ShortlistedCandidateAccountComponent } from './components/shortlisted-candidate-account/shortlisted-candidate-account.component';
import { ShortlistedCardComponent } from './components/shortlisted-card/shortlisted-card.component';
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { ApplicantsTableComponent } from './components/applicants-table/applicants-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';

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
    DropdownModule
  ]
})
export class AdminModule { }
