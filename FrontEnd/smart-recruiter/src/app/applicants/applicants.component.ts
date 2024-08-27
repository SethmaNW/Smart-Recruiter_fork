import { Component } from '@angular/core';
import { ApplicantsListService } from '../services/applicants-list.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss']
})
export class ApplicantsComponent {
  jobId!: number;
  position: string = '';
  public isSelected: boolean = false;
  public isRejected: boolean = false;
  public isDeleted: boolean = false;
  public deleteVisible: boolean = false;
  
  constructor(private applicantsListService: ApplicantsListService){}

  loadPosition() {
    this.applicantsListService.getPositionName(this.jobId).subscribe(position => {
      this.position = position;	
      // console.log('Position ', this.position);
    });
  }

  onJobIdChange(jobId: number){
    this.jobId = jobId; 
    // console.log('Job ID:', this.jobId);
    this.loadPosition();
  }

  onIsSelectedChange(selected: boolean) {
    this.isSelected = selected;
  }
  
  onIsRejectedChange(rejected: boolean) {
    this.isRejected = rejected;
  }

  onIsDeletedChange(deleted: boolean) {
    this.isDeleted = deleted;
  }

  // onTabChange(event: any) {
  //   this.deleteVisible = false;
  // }
  onTabChange() {    /// checkkkk
    // onTabChange(isDeleted: boolean) {    
    this.deleteVisible = false;
  }
  
}
