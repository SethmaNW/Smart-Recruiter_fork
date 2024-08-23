import { Component,Injectable,OnInit } from '@angular/core';
import { SlidersService } from '../services/sliders.service';
import { Mark } from '../models/mark.model';


@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements  OnInit{

  value1 : number| null =null;
  value2 : number| null=null;
  value3 : number| null=null;
  value4 : number| null=null;
  value5 : number| null=null;
  value6 : number| null=null;
  value7 : number| null=null;
  value8 : number| null=null;
  value9 : number| null=null;
  value10: number| null=null;

  text:String='';
  isMarkSaved : boolean = false;  // confimation popup that mark is saved
  criteria_value : Mark[]=[
    { criteria: 'Attitude and Discipline', value: this.value1, inactive: false },
    { criteria: 'Technical Knowledge', value: this.value2, inactive: false },
    { criteria: 'Education Background', value: this.value3, inactive: false },
    { criteria: 'Professional Qualification', value: this.value4, inactive: false },
    { criteria: 'Carrier Background', value: this.value5, inactive: false },
    { criteria: 'Communication Skills', value: this.value6, inactive: false },
    { criteria: 'Cultrul fit', value: this.value7, inactive: false },
    { criteria: 'Family Background', value: this.value8, inactive: false },
    { criteria: 'IQ/Creativity/Problem Solving Skill', value: this.value9, inactive: false },
    { criteria: 'Management  Skills', value: this.value10, inactive: false },
  
  ];

 
  




  constructor(private slidersService: SlidersService) { }

  ngOnInit(): void {}

  saveComment(){
    if(this.text){
      console.log(`Saving comment: ${this.text}`);
    }

  }

  saveAll(){
    this.savevalue();
    this.saveComment();
  }

  

  savevalue() : void{
    this.criteria_value.forEach((criteria, index) => {
      console.log(`Value ${index + 1}: ${criteria.value}`);
    });
  
  
   
  
    
     } 
   
  
  }




