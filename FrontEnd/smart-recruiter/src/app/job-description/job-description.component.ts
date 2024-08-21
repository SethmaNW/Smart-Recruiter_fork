import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.scss']
})
export class JobDescriptionComponent implements OnInit {
  jobId: number | undefined;
  jobDescription : any | undefined;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.jobId = +params['jobId']; // The '+' operator converts the string to a number
      //console.log(this.jobId);
      if (this.jobId) {
        this.getJobDescription(this.jobId);
      }
    });
  }

  getJobDescription(jobId: number): void {
    const url = `http://localhost:5263/api/Job/GetJobDescriptionByJobId/${jobId}`;
    this.http.get(url).subscribe((res) => {
      this.jobDescription = res;
    }
    );
  }

}
