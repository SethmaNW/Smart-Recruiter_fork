import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ShortlistedListService } from '../services/shortlisted-list.service';
import { ActivatedRoute } from '@angular/router';
import { Applicant } from '../models/applicants.model';

@Component({
  selector: 'app-shortlisted-card',
  templateUrl: './shortlisted-card.component.html',
  styleUrls: ['./shortlisted-card.component.scss']
}) 

export class ShortlistedCardComponent implements OnInit {  
  public shortlisted: Applicant[] = [];
  public jobId!: number; 
  
  @Input() roleId: number = 1;
  @Output() jobIdChange = new EventEmitter<number>();

  constructor(
    private shortlistedListService: ShortlistedListService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void{
    this.callInitialiizer();
  }

  callInitialiizer(): void{
    this.route.queryParamMap.subscribe(params => {
      this.jobId = +params.get('jobId')!;
      this.jobIdChange.emit(this.jobId);

      this.loadShortlist();
    }); 
  }

  loadShortlist(): void{
    this.shortlistedListService.getShortlistedCandidates(this.jobId).subscribe(candidates => {
      this.shortlisted = candidates.filter(candidate => candidate.role_Id === this.roleId);
      console.log(this.shortlisted);
    });
  }

}
 

// export class ShortlistedCardComponent implements OnInit {
//   shortlisted: any[] = [];
//   loading: boolean = true;

//   constructor(private shortlistedListService: ShortlistedListService) { }

//   ngOnInit(){
//     this.shortlisted = this.shortlistedListService.getShortlistedCandidates();
//     this.loading = this.shortlistedListService.isLoading();

//   }
// }