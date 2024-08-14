import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  private sliderValue = new BehaviorSubject<{[name:string]:number}>({});
  sliderValue$ = this.sliderValue.asObservable();

 updateslidervalue(criteria:string,value:number):void{
  const currentValues = { ...this.sliderValue.value, [criteria]: value };
  this.sliderValue.next(currentValues);
 }
}
