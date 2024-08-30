import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from 'src/app/shared/models/job.model';

@Injectable({
  providedIn: 'root'
})

export class JobPostService {
  // These job details used until database is connected
  jobs : any[] = [
    {
      jobId : 1,
      title : 'Software Engineer',
      description : 'Develop software applications',
      location : 'Lagos',
      Deparment : 'Engineering',
      active : true
    },
    {
      jobId : 2,
      title : 'Product Manager',
      description : 'Manage product development',
      location : 'Lagos',
      Deparment : 'Product',
      active : true
    },
    {
      jobId : 3,
      title : 'Sales Manager',
      description : 'Manage sales team',
      location : 'Lagos (Hybrid)',
      Deparment : 'Sales',
      active : false
    }
  ];
  constructor(private http : HttpClient) { }
  
  getAllJobs () : Observable<Job[]>  {
    return this.http.get<Job[]>('api/Job');
  }

  addJob(job : Job) : Observable<Job>{
    return this.http.post<Job>('api/Job', job);
  }
}
