import { Component,Injectable,OnInit } from '@angular/core';
import { Mark } from '../models/mark.model';
import { SlidersService } from './sliders.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements  OnInit{

  // Initialize the mark values with null
  private value1 : number| null=null;
  private value2 : number| null=null;
  private value3 : number| null=null;
  private value4 : number| null=null;
  private value5 : number| null=null;
  private value6 : number| null=null;
  private value7 : number| null=null;
  private value8 : number| null=null;
  private value9 : number| null=null;
  private value10: number| null=null;

  public text : string | undefined= undefined;
  comments: string[] = [];
  public criteria_value : Mark[]=[
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

  private jobId! : number;
  private candidateId! : number;

  constructor(public sliderSVC : SlidersService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams?.subscribe(params => {
      this.jobId = params['jobId'];
      this.candidateId = params['candidateId'];
    });
  }

  saveMarksAndComment(){
    this.saveMarks();
    this.saveComment();
  }

  saveComment(){
    this.sliderSVC.saveComment(this.text, this.jobId, this.candidateId);
  }
  
  saveMarks() : void {
    if (this.criteria_value) {
      const criteriaCopy = JSON.parse(JSON.stringify(this.criteria_value));
      this.sliderSVC.saveMarks(criteriaCopy, this.jobId, this.candidateId);

      // Reset the values to null after saving
      this.criteria_value.forEach(mark => {
        mark.value = null;
      });
    }
  } 
   
  
}




