import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Job } from 'src/app/shared/models/job.model';
// import { Job } from '../models/job.model';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.scss']
})
export class JobDescriptionComponent implements OnInit {
  jobId: number | undefined;
  job : Job | undefined;
  isJobLoaded : boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.jobId = +params['jobId']; // The '+' operator converts the string to a number
      if (this.jobId) {
        // This will not fetching only description it fetches id, title, description etc..
        this.getJobDescription(this.jobId);
      }
      this.isJobLoaded = true;
    });
  }

  getJobDescription(jobId: number): void {
    const url = `http://localhost:5263/api/Job/GetJobDescriptionByJobId/${jobId}`;
    this.http.get(url).subscribe((res) => {
      this.job = res;
      //console.log(this.job?.description);
    }
    );
  }

}
