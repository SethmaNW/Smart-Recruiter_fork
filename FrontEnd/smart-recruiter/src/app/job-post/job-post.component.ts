import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Job } from '../models/job.model';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss'],
  standalone : true,
  imports: [CommonModule, CardModule, TagModule, DropdownModule, FormsModule],
  encapsulation: ViewEncapsulation.None
})
export class JobPostComponent {
  // Style object for p-card. Important -: This is not when I create class and apply styles.
  //p_cardStyleOBJ = {'background-color':'var(--surface-200)', 'margin-top': '2rem'}

  dropDownOptions : any = [
    { name : 'Active' },
    { name : 'Inactive' },
  ];
  selectedFromDropDown : string = 'Active';

  @Input() job! : Job;
  constructor() { }

  // get dropdownOptions
  get dropdownOptions(){
    return this.dropDownOptions;
  }

}
