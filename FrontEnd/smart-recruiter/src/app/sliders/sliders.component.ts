import { Component,OnInit } from '@angular/core';
import { SlidersService } from 'src/app/sliders.service';


interface criteria{
  name:string;
  marks:number;
}

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements  OnInit{
  criteria:criteria[]=[
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

  selectedCriteria:criteria|undefined;
  value=0;




  constructor(private slidersService: SlidersService) { }

  ngOnInit(): void {}

  savevalue():void{

    if(this.selectedCriteria){
      console.log(`Saving ${this.value} for ${this.selectedCriteria.name}`);
      this.slidersService.updateslidervalue(this.selectedCriteria.name,this.value);

      this.value=0;


     } else {
      console.log('select a criteria first');
    }


  }

}
