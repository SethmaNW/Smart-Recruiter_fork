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
}
