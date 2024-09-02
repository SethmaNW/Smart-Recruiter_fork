import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userId : string = '';
  password : string = '';

  constructor(private AuthenticationSvc : AuthenticationService, private router : Router){}
  onSubmit(){
    console.log(this.userId);
    console.log(this.password);
    if(this.AuthenticationSvc.logIn(this.userId, this.password)){
      this.router.navigate(['/admin-dashboard']);
    }
    else{
      console.log("Invalid credentials");
    }
  }
}

