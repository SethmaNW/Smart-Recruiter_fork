import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostService } from '../services/job-post.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  // standalone : true,
  // imports : [CommonModule]
})
export class AdminDashboardComponent implements OnInit {
  visible : boolean = false;
  jobs: any[] = [];
  filteredJobs: any[] = [];

  constructor( private jobPostSvc : JobPostService) { }

  // get jobs(){
  //   return this.jobPostSvc.jobs;
  // }

  ngOnInit(){
    this.jobs = this.jobPostSvc.jobs;
    this.filteredJobs = this.jobs;
  }

  showDialog(){
    this.visible = true;
  }

  filterGlobal(event: Event){
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value.toLowerCase();
    
    this.filteredJobs = this.jobs.filter(job =>
      job.title.toLowerCase().includes(query) ||
      job.description.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query) ||
      job.Deparment.toLowerCase().includes(query)
    );
    
    // console.log(this.filteredJobs);
  }

}
