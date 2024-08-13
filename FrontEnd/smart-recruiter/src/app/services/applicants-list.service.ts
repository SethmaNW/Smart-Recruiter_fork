import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from '../models/applicants.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsListService {
  customers: any[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient) {
    // this.loadDummyData();
  }

  // getCustomers() {
  //   return this.customers;
  // }

  // isLoading() {
  //   return this.loading;
  // }

  updateComment(jobId: number, candidateId: number, adminId: number,  comment: string) {
    console.log('Reached update comment service');
    return this.http.post(`api/Comment/${jobId}/${candidateId}/${adminId}`, { comment });
  }

  updateCommentExceeded(id: number, exceeded: boolean) {
    const customer = this.customers.find(c => c.id === id);
    if (customer) {
      customer.commentExceeded = exceeded;
    }
  }

  getAllApplicants(jobId: number): Observable<Applicant[]> {
    console.log('Reached applicant list service');
    return this.http.get<Applicant[]>(`api/Candidate/applicants/${jobId}`);
  }

  getPositionName(jobId: number): Observable<string> {
    return this.http.get<string>(`api/Job/position/${jobId}`);
  }

  // loadDummyData() {
  //   this.customers = [
  //     {
  //       // representative: { name: 'Jane Smith' },
  //       id: 1,
  //       position: 'Software Engineer',
  //       name: 'John Doe',
  //       availableDate: '2021-01-01',
  //       university: 'University of Colombo',
  //       degree: 'BSc in Computer Science',
  //       contact: '077 0089633',
  //       skills: 'java, angular, spring, khfsdgwe yoisdjgk kjgfsdgwe yoisdj gkkjg',
  //       gpa: '3.5',
  //       workExperience: '2 years',
  //       cv: 'https://www.google.com', 
  //       comment: '',          
  //       commentExceeded: false,
  //       status: 'Applied'
  //     }
  //   ];

  //   this.loading = false;
  // }

}
