import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Table } from 'primeng/table';
import { ApplicantsListService } from '../services/applicants-list.service';

@Component({
  selector: 'app-applicant-table',
  templateUrl: './applicant-table.component.html',
  styleUrls: ['./applicant-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApplicantTableComponent implements OnInit {
  customers: any[] = [];
  loading: boolean = true;
  commentExceeded = false;

  @ViewChild('dt2') dt2!: Table; // ViewChild to access the p-table

  constructor(private applicantsListService: ApplicantsListService) { }

  ngOnInit() {
    const JobId = 1;   // JobId is hardcoded for now  *********************************
    this.applicantsListService.getAllApplicants(JobId).subscribe(customers => {
      this.customers = customers; 
      // console.log(this.customers);
    });
    // this.customers = this.applicantsListService.getCustomers();
    // this.loading = this.applicantsListService.isLoading();
  }

  filterGlobal(event: Event, matchMode: string) {
    const inputElement = event.target as HTMLInputElement;   // here event.target -> input element (treat the event target as an HTML input element)
    this.dt2.filterGlobal(inputElement.value, matchMode);
  }

  handleWordLimitExceeded(id:number, exceeded: boolean) {
    this.applicantsListService.updateCommentExceeded(id, exceeded);
  }

  
}
