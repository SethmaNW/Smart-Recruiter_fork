import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss']
})
export class ApplicantsComponent implements OnInit {
  customers: any[] = [];
  loading: boolean = true;

  @ViewChild('dt2') dt2!: Table; // ViewChild to access the p-table

  ngOnInit() {
    this.loadDummyData();
  }

  loadDummyData() {
    this.customers = [
      {
        representative: { name: 'Jane Smith' },
        id: 1,
        name: 'John Doe',
        university: 'University of Colombo',
        degree: 'BSc in Computer Science',
        contact: '077 0089633',
        skills: 'java, angular, spring, khfsdgweyoisdjgkkjg',
        gpa: '3.5',
        workExperience: '2 years',
        cv: 'https://www.google.com',        
        status: 'Active'
      },
      {
        representative: { name: 'Jane Smith' },
        id: 1,
        name: 'Keran Perera',
        university: 'University of Colombo',
        degree: 'BSc in Physics',
        contact: '077 0089633',
        skills: 'java, angular, spring, khfsdgweyoisdjgkkjg',
        gpa: '3.5',
        workExperience: '2 years',
        cv: 'https://www.google.com',        
        status: 'Active'
      }
    ];

    this.loading = false;
  }

  filterGlobal(event: Event, matchMode: string) {
    const inputElement = event.target as HTMLInputElement;   // here event.target -> input element (treat the event target as an HTML input element)
    this.dt2.filterGlobal(inputElement.value, matchMode);
  }
}
