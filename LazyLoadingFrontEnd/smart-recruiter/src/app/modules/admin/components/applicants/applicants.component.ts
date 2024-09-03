import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { ApplicantsListService } from '../../services/applicant-list.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ApplicantsComponent {
  private jobId!: number;
  public position: string = '';
  public isSelected: boolean = false;
  public isRejected: boolean = false;
  public isDeleted: boolean = false;
  public deleteVisible: boolean = false;
  
  constructor(
    private applicantsListService: ApplicantsListService,
    private cdr: ChangeDetectorRef
  ){}

  loadPosition():void {
    this.applicantsListService.getPositionName(this.jobId).subscribe(position => {
      this.position = position;	
      // console.log('Position ', this.position);
    });
  }

  onJobIdChange(jobId: number):void{
    this.jobId = jobId; 
    // console.log('Job ID:', this.jobId);
    this.loadPosition();
  }

  onIsSelectedChange(selected: boolean):void {
    this.isSelected = selected;
    console.log("selected reached applicants page: ", this.isSelected); 
    this.cdr.detectChanges();
  }
  
  /////////////////////////////////////////////////// doesnt reach here. have to check
  onIsRejectedChange(rejected: boolean):void {
    this.isRejected = rejected;
    console.log("rejected reached applicants page: ", this.isRejected);
    this.cdr.detectChanges();
  }

  onIsDeletedChange(deleted: boolean):void {
    this.isDeleted = deleted;
    console.log("deleted reached applicants page: ", this.isDeleted);
    this.cdr.detectChanges();
  }

  ////////// this is related to the delete confirm pop-up issue when changing tab after candidaate deletion. Couldn't solve it
  // onTabChange(event: any) {
  //   this.deleteVisible = false;
  // }
  onTabChange():void {    /// checkkkk
    // onTabChange(isDeleted: boolean) {    
    this.deleteVisible = false;
  }
  
}
