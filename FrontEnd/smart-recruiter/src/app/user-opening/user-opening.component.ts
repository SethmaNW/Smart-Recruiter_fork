import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-opening',
  templateUrl: './user-opening.component.html',
  styleUrls: ['./user-opening.component.scss']
})
export class UserOpeningComponent {

  job:any;
  filterGlobal: any;

  constructor(private router:Router) { }

  navigateToForm(){
    this.router. navigate (['/form']);
  }

  ngOnInit(): void {
  }


}
