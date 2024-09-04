import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { UserRoutingModule } from './user-routing.module';
import { FormComponent } from './components/form/form.component';
import { MaxWordsDirectiveDirective } from './directives/max-words.directive.directive';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { StepperModule } from 'primeng/stepper';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { UserOpeningComponent } from './components/user-opening/user-opening.component';
import { JobDescriptionComponent } from './components/job-description/job-description.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'user-opening',
    component: UserOpeningComponent
  },
  {
    path: 'job-description',
    component: JobDescriptionComponent
  }
  
];

@NgModule({
  declarations: [
    FormComponent,
    MaxWordsDirectiveDirective,
    UserNavComponent,
    UserOpeningComponent,
    JobDescriptionComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    TagModule,
    CardModule,
    StepperModule,
    FileUploadModule,
    InputTextareaModule,
    CalendarModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
