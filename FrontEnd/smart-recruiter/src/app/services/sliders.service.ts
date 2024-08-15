import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  private sliderValue = new BehaviorSubject<{[name:string]:number}>({});
  sliderValue$ = this.sliderValue.asObservable();


//  updateslidervalue(criteria:string,value:number):void{
//   const currentValues = { ...this.sliderValue.value, [criteria]: value };
//   this.sliderValue.next(currentValues);
//  }
  constructor(private http: HttpClient) { }

saveMark(criteria: string, value: number, candidateId : number, roleId : number, jobId : number, adminId : number): Observable<boolean> {
  var mark = {criteria: criteria, 
              value: value, 
              candidateId: candidateId, 
              roleId: roleId, 
              jobId: jobId, 
              adminId: adminId};
  //console.log(mark);
  // send post request to backend
  return this.http.post<boolean>('api/Mark', mark);
  }

}
