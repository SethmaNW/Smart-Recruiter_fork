import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormComponent } from './components/form/form.component';
import { MaxWordsDirectiveDirective } from './directives/max-words.directive.directive';


@NgModule({
  declarations: [
    FormComponent,
    MaxWordsDirectiveDirective
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
