import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path: 'nav-bar', component: NavbarComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
=======
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'nav-bar', component: NavbarComponent},
  {path: 'login', component: LoginComponent}
>>>>>>> 0bcacdc18f5ad543816012586820a35ebc45d03c
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
