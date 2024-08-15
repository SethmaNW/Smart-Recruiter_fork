import { Component,Injectable,OnInit } from '@angular/core';
import { SlidersService } from '../services/sliders.service';
import { Mark } from '../models/mark.model';


@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements  OnInit{

  value : number = 0; //default value = 0 for the slider
  criteria_value : Mark[]=[
    { criteria: 'Attitude and Discipline', value: this.value, inactive: false },
    { criteria: 'Technical Knowledge', value: this.value, inactive: false },
    { criteria: 'Education Background', value: this.value, inactive: false },
    { criteria: 'Professional Qualification', value: this.value, inactive: false },
    { criteria: 'Carrier Background', value: this.value, inactive: false },
    { criteria: 'Communication Skills', value: this.value, inactive: false },
    { criteria: 'Cultrul fit', value: this.value, inactive: false },
    { criteria: 'Family Background', value: this.value, inactive: false },
    { criteria: 'IQ/Craetivity/Problem Solving Skill', value: this.value, inactive: false },
    { criteria: 'Management  Skills', value: this.value, inactive: false },
  
  ];

  mark : Mark | undefined;
  




  constructor(private slidersService: SlidersService) { }

  ngOnInit(): void {}

  savevalue():void{
  
    if(this.mark){
      console.log(`Saving ${this.value} for ${this.mark.criteria}`);
      if (this.mark.criteria && this.mark.value) {
        this.slidersService.updateslidervalue(this.mark.criteria, this.mark.value);
      } else {
        console.log('select a criteria first');
      }
  
  
     } else {
      console.log('select a criteria first');
    }
  
  
  }

}
