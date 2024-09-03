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
import { UserNavComponent } from './user-nav/user-nav.component';

@NgModule({
  declarations: [
    FormComponent,
    MaxWordsDirectiveDirective,
    UserNavComponent
    
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
    SharedModule
  ]
})
export class UserModule { }
