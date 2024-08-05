import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortlistedListService {
  shortlistedCandidates: any[] = [];
  loading: boolean = true;

  constructor() { 
    this.loadShortlisted();
  }

  getShortlistedCandidates() {
    return this.shortlistedCandidates
  }

  isLoading() {
    return this.loading;
  }

  loadShortlisted(){
    this.shortlistedCandidates = [
      {
        id: 1,
        position: 'Software Engineer',
        name: 'John Doe',
        availableDate: '2021-01-01',
        university: 'University of Colombo',
        degree: 'BSc in Computer Science',
        contact: '077 0089633',
        email: 'joe.email.com',
        skills: 'java, angular, spring, khfsdgwe yoisdjgk kjgfsdgwe yoisdj gkkjg',
        gpa: '3.5',
        workExperience: '2 years',
        cv: 'https://www.google.com', 
        comment: '',   
        testmark: '20',
        interview1: 'the action of ordaining someone in holy orders',
        interview2: 'the action of ordaining someone in holy orders',	
        interview3: 'the action of ordaining someone in holy orders',       
        commentExceeded: false,
        status: '2nd Interview'
      },
      {
        id: 2,
        position: 'Software Engineer',
        name: 'Keran Perera',
        availableDate: '2021-01-01',
        university: 'University of Colombo',
        degree: 'BSc in Physics',
        contact: '077 0089633',
        email: 'karan.email.com',
        skills: 'java, angular, spring, khfs dgweyoisd jgkkjgf sdgwey oisdjgkk jgfsdgwe yoisdj gkkjg yoisdjgk kjgfsdgwe yoisdj gkkjg..',
        gpa: '3.5',
        workExperience: '2 years',
        cv: 'https://www.google.com',   
        comment: 'comment 1',  
        testmark: '',
        interview1: '',
        interview2: '',	
        interview3: '',        
        commentExceeded: false,
        status: 'Shortlisted'
      },
      {
        id: 3,
        position: 'Software Engineer',
        name: 'Anthony Silva',
        availableDate: '2021-01-01',
        university: 'University of Colombo',
        degree: 'BSc in Physics',
        contact: '077 0089633',
        email: 'karan.email.com',
        skills: 'java, angular, spring, khfs dgweyoisd jgkkjgf sdgwey oisdjgkk jgfsdgwe yoisdj gkkjg yoisdjgk kjgfsdgwe yoisdj gkkjg..',
        gpa: '3.5',
        workExperience: '2 years',
        cv: 'https://www.google.com',   
        comment: 'comment 1',  
        testmark: '30',
        interview1: '',
        interview2: '',	
        interview3: '',        
        commentExceeded: false,
        status: '3rd Interview'
      }
    ];

    this.loading = false;
  }
}
