import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Job } from '../models/job.model';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss'],
  standalone : true,
  imports: [CommonModule, CardModule, TagModule, DropdownModule, FormsModule, RouterLink],
  encapsulation: ViewEncapsulation.None
})
export class JobPostComponent implements OnInit {
  

  dropDownOptions : any = [
    { name : 'Active', value : true },
    { name : 'Inactive', value : false },
  ];
  selectedFromDropDown! : any;

  @Input() job! : Job;
  constructor() { 
  
  }

  ngOnInit(): void {
    //Assuming when a job posted it should be active at posting time
    this.selectedFromDropDown = this.dropDownOptions[0];
  }

  changeActiveStatus(){
    this.job.activeStatus = this.selectedFromDropDown.value;
    // update the dabase with the new active status of the job



    
  }
  // get dropdownOptions
  get dropdownOptions(){
    return this.dropDownOptions;
  }

}
