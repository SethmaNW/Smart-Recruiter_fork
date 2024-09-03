import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { ShortlistedCandidateAccountComponent } from './components/shortlisted-candidate-account/shortlisted-candidate-account.component';
import { ShortlistedCardComponent } from './components/shortlisted-card/shortlisted-card.component';
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { ApplicantsTableComponent } from './components/applicants-table/applicants-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { ConfirmationService, MessageService } from 'primeng/api';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CandidatePersonalProfileComponent } from './components/candidate-personal-profile/candidate-personal-profile.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { SlidersComponent } from './components/sliders/sliders.component';

const routes: Routes = [
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'applicants',
    component: ApplicantsComponent
  },
  {
    path: 'shortlisted',
    component: ShortlistedCandidateAccountComponent
  },
  {
    path: 'personal-profile',
    component: CandidatePersonalProfileComponent
  }
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    JobPostComponent,
    ShortlistedCandidateAccountComponent,
    ShortlistedCardComponent,
    ApplicantsComponent,
    ApplicantsTableComponent,
    NavbarComponent,
    SidebarComponent,
    CandidatePersonalProfileComponent,
    PieChartComponent,
    SlidersComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [ConfirmationService, provideAnimations(), MessageService],
})
export class AdminModule { }