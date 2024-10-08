import { Component } from '@angular/core';
import { ApplicantsListService } from '../services/applicants-list.service';

@Component({
  selector: 'app-shortlisted-candidate-account',
  templateUrl: './shortlisted-candidate-account.component.html',
  styleUrls: ['./shortlisted-candidate-account.component.scss']
})

export class ShortlistedCandidateAccountComponent {
  public position: string = '';
  private selectedJobId!: number;

  constructor(private applicantsListService: ApplicantsListService){}

  handleJobIdChange(jobId: number): void{
    this.selectedJobId = jobId;
    this.loadPosition();
  }

  loadPosition(): void {
    this.applicantsListService.getPositionName(this.selectedJobId).subscribe(position => {
      this.position = position;	
      // console.log('Position ', this.position);
    });
  }

  // shortlisted: any[] = [];
  // loading: boolean = true;

  // interview1: any[] = [];
  // interview2: any[] = [];
  // interview3: any[] = [];
  // offered: any[] = [];

  // constructor(private shortlistedListService: ShortlistedListService) { }

  // ngOnInit(){
  //   this.shortlisted = this.shortlistedListService.getShortlistedCandidates();
  //   this.loading = this.shortlistedListService.isLoading();

  //   this.interview1 = this.shortlisted.filter(candidate => candidate.status === 'Shortlisted');
  //   this.interview2 = this.shortlisted.filter(candidate => candidate.status === '2nd Interview');
  //   this.interview3 = this.shortlisted.filter(candidate => candidate.status === '3rd Interview');
  //   this.offered = this.shortlisted.filter(candidate => candidate.status === 'Offered');
  // }
}
