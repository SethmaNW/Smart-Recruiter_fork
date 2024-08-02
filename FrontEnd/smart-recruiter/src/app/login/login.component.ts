import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userId : string = '';
  password : string = '';

  onSubmit(){
    console.log(this.userId);
    console.log(this.password);
  }
}
