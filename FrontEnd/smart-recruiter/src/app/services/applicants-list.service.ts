import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsListService {
  customers: any[] = [];
  loading: boolean = true;

  constructor() {
    this.loadDummyData();
  }

  loadDummyData() {
    this.customers = [
      {
        // representative: { name: 'Jane Smith' },
        id: 1,
        position: 'Software Engineer',
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
        id: 2,
        position: 'Software Engineer',
        name: 'Keran Perera',
        university: 'University of Colombo',
        degree: 'BSc in Physics',
        contact: '077 0089633',
        skills: 'java, angular, spring, khfsdgweyoisdjgkkjg',
        gpa: '3.5',
        workExperience: '2 years',
        cv: 'https://www.google.com',        
        status: 'Active'
      },
      {
        id: 3,
        position: 'Software Engineer',
        name: 'Keran Perera',
        university: 'University of Colombo',
        degree: 'BSc in Physics',
        contact: '077 0089633',
        skills: 'java, angular, spring, khfsdgweyoisdjgkkjg',
        gpa: '3.5',
        workExperience: '2 years',
        cv: 'https://www.google.com',        
        status: 'Active'
      },
      {
        id: 4,
        position: 'Software Engineer',
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

  getCustomers() {
    return this.customers;
  }

  isLoading() {
    return this.loading;
  }
}
