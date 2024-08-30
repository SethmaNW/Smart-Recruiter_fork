import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from 'src/app/shared/models/applicant.model';

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

} 
