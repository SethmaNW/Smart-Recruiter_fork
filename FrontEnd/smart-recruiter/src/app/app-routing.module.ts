import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { FormComponent } from './form/form.component';
import { ApplicantTableComponent } from './applicant-table/applicant-table.component';
import { CandidatePersonalProfileComponent } from './candidate-personal-profile/candidate-personal-profile.component';
import { ShortlistedCandidateAccountComponent } from './shortlisted-candidate-account/shortlisted-candidate-account.component';

const routes: Routes = [
  // {path: 'nav-bar', component: NavbarComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'applicants', component: ApplicantsComponent},
  {path: 'form', component: FormComponent},
  {path: 'applicant-table', component: ApplicantTableComponent},
  {path: 'personal-profile', component: CandidatePersonalProfileComponent},
  {path: 'shortlisted', component: ShortlistedCandidateAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
