import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobPostService {
  // These job details used until database is connected
  jobs : Job[] = [
    {
      title : 'Software Engineer',
      description : 'Develop software applications',
      location : 'Lagos',
      Deparment : 'Engineering',
      active : true
    },
    {
      title : 'Product Manager',
      description : 'Manage product development',
      location : 'Lagos',
      Deparment : 'Product',
      active : true
    },
    {
      title : 'Sales Manager',
      description : 'Manage sales team',
      location : 'Lagos',
      Deparment : 'Sales',
      active : false
    }
  ];
  constructor() { }
}
