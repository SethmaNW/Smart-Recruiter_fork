import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarkOutput } from '../models/markOutput.model';
import { Comments } from '../models/comments.model';

@Injectable({
  providedIn: 'root'
})
export class PieChartService {

  constructor(private http : HttpClient) { }

  public getMarks(candidateId : number | undefined, jobId : number | undefined, roleId : number | undefined) : Observable<MarkOutput>{
    return this.http.get(`api/Mark/getMarks/${candidateId}/${jobId}/${roleId}`);
  }

  public getComments(jobId : number | undefined, candidateId : number | undefined) : Observable<Comments[]>{
    return this.http.get<Comments[]>(`api/Comment/comment/${jobId}/${candidateId}`);
  }
}
