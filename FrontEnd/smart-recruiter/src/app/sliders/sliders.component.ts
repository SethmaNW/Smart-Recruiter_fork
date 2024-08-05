import { Component,OnInit } from '@angular/core';


interface candidate{
  name:string;
  marks:number;
}

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements  OnInit{
   candidate:candidate[]=[
    { name: 'Attitude and Discipline', marks: 70 },
    { name: 'Technical Knowledge', marks: 80 },
    { name: 'Education Background', marks: 60 },
    { name: 'Professional Qualification', marks: 75 },
    { name: 'Carrier Background', marks: 85 },
    { name: 'Communication Skills', marks: 90 },
    { name: 'Cultrul fit', marks: 70 },
    { name: 'Family Background', marks: 70 },
    { name: 'IQ/Craetivity/Problem Solving Skill', marks: 80 },
    { name: 'Management  Skills', marks: 75 },
  
  ];

  selectedCandidate:candidate|undefined;
  value=0;




  constructor() { }

  ngOnInit(): void {
      
  }





}
