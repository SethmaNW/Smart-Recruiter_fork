import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss']
})
export class ApplicantsComponent implements OnInit {
  customers: any[] = [];
  loading: boolean = true;

  ngOnInit() {
    this.loadDummyData();
  }

  loadDummyData() {
    this.customers = [
      {
        id: 1,
        name: 'John Doe',
        country: { name: 'USA' },
        representative: { name: 'Jane Smith' },
        status: 'Active'
      },
      {
        id: 2,
        name: 'Anna Smith',
        country: { name: 'UK' },
        representative: { name: 'John Doe' },
        status: 'Inactive'
      }
    ];

    this.loading = false;
  }
}
