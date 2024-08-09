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

  updateCommentExceeded(id: number, exceeded: boolean) {
    const customer = this.customers.find(c => c.id === id);
    if (customer) {
      customer.commentExceeded = exceeded;
    }
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
  //     },
  //     {
  //       id: 2,
  //       position: 'Software Engineer',
  //       name: 'Keran Perera',
  //       availableDate: '2021-01-01',
  //       university: 'University of Colombo',
  //       degree: 'BSc in Physics',
  //       contact: '077 0089633',
  //       skills: 'java, angular, spring, khfs dgweyoisd jgkkjgf sdgwey oisdjgkk jgfsdgwe yoisdj gkkjg yoisdjgk kjgfsdgwe yoisdj gkkjg..',
  //       gpa: '3.5',
  //       workExperience: '2 years',
  //       cv: 'https://www.google.com',   
  //       comment: 'comment 1',   
  //       commentExceeded: false,     
  //       status: 'ShortListed'
  //     },
  //     {
  //       id: 3,
  //       position: 'Software Engineer',
  //       name: 'Keran Perera',
  //       availableDate: '2021-01-01',
  //       university: 'University of Colombo',
  //       degree: 'BSc in Physics',
  //       contact: '077 0089633',
  //       skills: 'java, angular, spring, khfsdgweyoisdjgkkjg',
  //       gpa: '3.5',
  //       workExperience: '2 years',
  //       cv: 'https://www.google.com',   
  //       comment: '',     
  //       commentExceeded: false,
  //       status: 'Not Selected'
  //     },
  //     {
  //       id: 4,
  //       position: 'Software Engineer',
  //       name: 'Keran Perera',
  //       availableDate: '2021-01-01',
  //       university: 'University of Colombo',
  //       degree: 'BSc in Physics',
  //       contact: '077 0089633',
  //       skills: 'java, angular, spring, khfsdgweyoisdjgkkjg',
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

  getAllApplicants(): Observable<Applicant[]> {
    return this.http.get<Applicant[]>('api/Candidate');
  }

}
