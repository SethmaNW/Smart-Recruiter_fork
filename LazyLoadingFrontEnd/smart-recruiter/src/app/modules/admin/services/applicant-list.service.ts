import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Applicant } from 'src/app/shared/models/applicant.model';

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

  // updateCommentt(jobId: number, candidateId: number, adminId: number,  comment: string): Observable<any> {
  //   console.log('Reached update comment service');
  //   return this.http.post(`api/Comment/${jobId}/${candidateId}/${adminId}`, { comment });
  // }  

  updateComment(jobId: number, candidateId: number, adminId: number, roleId: number, commentText: string): Observable<Comment> {
    // console.log('Reached applicant update comment service');
    return this.http.post<Comment>(`api/Comment/${jobId}/${candidateId}/${adminId}/${roleId}`, { commentText });
  }

  // not used
  getCandidateIdsWithComments(jobId: number): Observable<number[]> {
    return this.http.get<number[]>(`api/Comment/candidateIds/${jobId}`);
  }

  // not used
  existComment(jobId: number, candidateId: number): Observable<boolean> {
    // console.log('Reached exist comment');
    // return this.http.get<boolean>(`api/Comment/checkcomment/${jobId}/${candidateId}`).pipe(
    //   tap(response => console.log('API Response:', response))
    // );
    // console.log(this.http.get<boolean>(`api/Comment/checkcomment/${jobId}/${candidateId}`));
    return this.http.get<boolean>(`api/Comment/checkcomment/${jobId}/${candidateId}`);
  }
  
  updateCommentExceeded(id: number, exceeded: boolean) {
    const customer = this.customers.find(c => c.id === id);
    if (customer) {
      customer.commentExceeded = exceeded;
    }
  }

  getAllApplicants(jobId: number): Observable<Applicant[]> {
    // console.log('Reached applicant list service');
    return this.http.get<Applicant[]>(`api/Candidate/applicants/${jobId}`);
  }

  getPositionName(jobId: number): Observable<string> {
    return this.http.get<string>(`api/Job/position/${jobId}`);
  }

  getAdminId(email: string): Observable<number> {
    return this.http.get<number>(`api/Admin/email/${email}`);
  }

  updateRole(candidateId: number, newRoleId: number): Observable<any> {
    return this.http.put(`api/Candidate/role/${candidateId}/${newRoleId}`, {});
  }

  deleteApplicant(candidateId: number): Observable<any> {
    return this.http.delete(`api/Candidate/delete/${candidateId}`);
  }

  getNoOfApplicants(jobId: number, roleId: number): Observable<number> {
    return this.http.get<number>(`api/Candidate/applicantsCount/${jobId}/${roleId}`);
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

