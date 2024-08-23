import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Job } from '../models/job.model';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApplicantsListService } from '../services/applicants-list.service';


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
  applicantsCount$!: Observable<number>;

  constructor(
    private http: HttpClient, 
    private applicantListServ: ApplicantsListService
  ) { }

  ngOnInit(): void {
    //Assuming when a job posted it should be active at posting time
    this.selectedFromDropDown = this.job.activeStatus? this.dropDownOptions[0] : this.dropDownOptions[1];
    if (this.job.id !== undefined) {
      this.applicantsCount$ = combineLatest([
        this.getApplicantsCount(this.job.id, 0),
        this.getApplicantsCount(this.job.id, 1)
      ]).pipe(
        map(([count1, count2]) => count1 + count2)
      );	
    }
  }

  updateJob(job : Job) : Observable<boolean>{
    return this.http.put<boolean>('api/Job', job);
  }

  changeActiveStatus(){
    this.job.activeStatus = this.selectedFromDropDown.value;
    this.updateJob(this.job).subscribe((res) => {
      //console.log(res);
    });
  }
  // get dropdownOptions
  get dropdownOptions(){
    return this.dropDownOptions;
  }

  getApplicantsCount(jobId: number, roleId: number): Observable<number> {
    return this.applicantListServ.getNoOfApplicants(jobId, roleId);
  }

}
