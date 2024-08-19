import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-user-opening',
  templateUrl: './user-opening.component.html',
  styleUrls: ['./user-opening.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserOpeningComponent {
  activeJobs : Job[] = [];
  job:any;
  filterGlobal: any;

  constructor(private router:Router, private http : HttpClient) { }

  navigateToForm(){
    this.router. navigate (['/form']);
  }

  ngOnInit(): void {
    this.http.get<Job[]>('api/Job/GetActiveJobs').subscribe(data=>{
      this.activeJobs = data;
    })
  }


}
