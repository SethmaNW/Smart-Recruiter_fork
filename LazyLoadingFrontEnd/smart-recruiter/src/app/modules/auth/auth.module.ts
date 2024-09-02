import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const route : Routes = [
  {path : 'login', component : LoginComponent} ,
]
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(route)
  ]
})
export class AuthModule { }
