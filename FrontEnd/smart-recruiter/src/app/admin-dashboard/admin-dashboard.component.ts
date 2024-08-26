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

  job : Job = {title : '', description : '',noOfAvailablePositions : 1, location : '', department : '', activeStatus : true, attitudeAndDiscipline : 1, technicalKnowledge : 1, educationBackground : 1, professionalQualification : 1, careerBackground : 1, communicationSkills : 1, culturalFit : 1, familyBackground : 1, iqCreativityProblemSolvingSkills : 1, managementSkills : 1};

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
      // job.description.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query) ||
      job.department.toLowerCase().includes(query)
    );
  }

  addJob(){
    this.jobPostSvc.addJob(this.job).subscribe((res) => {
      //console.log(res);
      this.jobs.push(res);
      this.filteredJobs = this.jobs;
    });
    this.visible = false;
    //console.log(this.job.description);
    // Reset the form
  }

}
