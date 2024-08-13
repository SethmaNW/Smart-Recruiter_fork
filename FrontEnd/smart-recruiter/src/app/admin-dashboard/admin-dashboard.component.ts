import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostService } from '../services/job-post.service';
import { AuthenticationService } from '../services/authentication.service';
import { Job } from '../models/job.model';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
  // standalone : true,
  // imports : [CommonModule]
})
export class AdminDashboardComponent implements OnInit {
  visible : boolean = false;
  jobs: any[] = [];
  filteredJobs: any[] = [];

  job : Job = {title : '', description : '',noOfAvailablePositions : 1, location : '', department : '', activeStatus : true, attitudeAndDiscipline : 10, technicalKnowledge : 10, educationBackground : 10, professionalQualification : 10, careerBackground : 10, communicationSkills : 10, culturalFit : 10, familyBackground : 10, iqCreativityProblemSolvingSkills : 10, managementSkills : 10};

  constructor( private jobPostSvc : JobPostService, protected AuthSvc : AuthenticationService) { }


  ngOnInit(){
    this.jobPostSvc.getAllJobs().subscribe(jobs => {this.jobs = jobs; this.filteredJobs = jobs;});
  }
  // Add New button popup control
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
      job.department.toLowerCase().includes(query)
    );
  }

  addJob(){
    this.jobPostSvc.addJob(this.job).subscribe((res) => {
      console.log(res);
      this.jobs.push(res);
      this.filteredJobs = this.jobs;
    });
    this.visible = false;

    // Reset the form
  }

}
