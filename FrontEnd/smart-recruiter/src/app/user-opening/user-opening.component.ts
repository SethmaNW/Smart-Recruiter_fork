import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { Job } from '../models/job.model';
import { combineLatest, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApplicantsListService } from '../services/applicants-list.service';
import { JobPostService } from '../services/job-post.service';

@Component({
  selector: 'app-user-opening',
  templateUrl: './user-opening.component.html',
  styleUrls: ['./user-opening.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserOpeningComponent {
  activeJobs : Job[] = [];
  // job:any;
  // filterGlobal: any;
  // applicantsCount$!: Observable<number>;
  applicantsCounts: { [jobId: number]: Observable<number> } = {};
  jobs: any[] = [];
  filteredJobs: any[] = [];

  constructor(private http : HttpClient, private applicantListServ: ApplicantsListService, private jobPostSvc: JobPostService) { }

  // navigateToForm(){
  //   this.router. navigate (['/form']);
  // }

  ngOnInit(): void {
    this.http.get<Job[]>('api/Job/GetActiveJobs').subscribe(data=>{
      this.activeJobs = data;
      //console.log(this.activeJobs);
      this.jobs = data;
      this.filteredJobs = data;
      console.log("checkk",this.filteredJobs);
      this.calculateApplicantsCounts();
      // if (this.activeJobs.length > 0 && this.activeJobs[0].id !== undefined) {
      //   this.applicantsCount$ = combineLatest([
      //     this.getApplicantsCount(this.activeJobs.id, 0),
      //     this.getApplicantsCount(this.activeJobs.id, 1)
      //   ]).pipe(
      //     map(([count1, count2]) => count1 + count2)
      //   );	
      // }
    })
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
    console.log(this.filteredJobs);
  }

  calculateApplicantsCounts(): void {
    this.activeJobs.forEach(job => {
      if (job.id !== undefined) {
        this.applicantsCounts[job.id] = combineLatest([
          this.getApplicantsCount(job.id, 0),
          this.getApplicantsCount(job.id, 1)
        ]).pipe(
          map(([count1, count2]) => count1 + count2),
          tap(totalCount => console.log(`Job ID ${job.id}: ${totalCount} candidates`))
        );
        // console.log(this.applicantsCounts[job.id]);
      } else {
        console.log("undefined job id");
      }
    });
  }

  getApplicantsCount(jobId: number, roleId: number): Observable<number> {
    return this.applicantListServ.getNoOfApplicants(jobId, roleId);
  }

}
