import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from '../models/applicants.model';

@Injectable({
  providedIn: 'root'
})
export class ShortlistedListService {
  shortlistedCandidates: any[] = [];
  loading: boolean = true;

  constructor(
    private http: HttpClient
  ) { }

  getShortlistedCandidates(jobId: number): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(`api/Candidate/shortlist/${jobId}`);    
  }

  // loadShortlisted(){
  //   this.shortlistedCandidates = [
  //     {
  //       id: 1,
  //       name: 'John Doe',
  //       contact: '077 0089633',
  //       email: 'joe.email.com',
  //       cv: 'https://www.google.com', 
  //       testmark: '2',
  //       roleId: 2
  //     },
  //     {
  //       id: 2,
  //       name: 'Keran Perera',
  //       contact: '077 0089633',
  //       email: 'karan.email.com',
  //       cv: 'https://www.google.com', 
  //       testmark: '2',
  //       roleId: 1
  //     }
  //   ];
  //   this.loading = false;
  // }
} 
