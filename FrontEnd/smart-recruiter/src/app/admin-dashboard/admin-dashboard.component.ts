import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostService } from '../services/job-post.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  // standalone : true,
  // imports : [CommonModule]
})
export class AdminDashboardComponent {
  visible : boolean = false;

  constructor( private jobPostSvc : JobPostService) { }

  get jobs(){
    return this.jobPostSvc.jobs;
  }

  showDialog(){
    this.visible = true;
  }

}
