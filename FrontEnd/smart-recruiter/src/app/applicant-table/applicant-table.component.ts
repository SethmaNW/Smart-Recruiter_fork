import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Table } from 'primeng/table';
import { ApplicantsListService } from '../services/applicants-list.service';
import { ActivatedRoute } from '@angular/router';
import { Applicant } from '../models/applicants.model';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-applicant-table',
  templateUrl: './applicant-table.component.html',
  styleUrls: ['./applicant-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApplicantTableComponent implements OnInit {
  customers: any[] = [];
  loading: boolean = true;
  // commentExceeded = false;
  position: string = '';
  jobId!: number;  // Declare jobId as a class property
  adminId!: number;
  // buttonClicked: Set<number> = new Set();    // use Angular’s property binding
  // buttonHiddenState: { [candidateId: number]: boolean } = {};

  @ViewChild('dt2') dt2!: Table; // ViewChild to access the p-table

  constructor(private applicantsListService: ApplicantsListService, 
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) { }

  // ngOnInit() {
  //   const JobId = 1;   // JobId is hardcoded for now  *********************************
  //   this.applicantsListService.getPositionName(JobId).subscribe(position => {
  //     this.position = position;	
  //   });
  //   this.applicantsListService.getAllApplicants(JobId).subscribe(customers => {
  //     this.customers = customers; 
  //     console.log(this.customers);
  //   });
  //   // this.customers = this.applicantsListService.getCustomers();
  //   // this.loading = this.applicantsListService.isLoading();
  // }

  ngOnInit() {
    // Get the jobId from the route parameters
    this.route.queryParamMap.subscribe(params => {
      this.jobId = +params.get('jobId')!;    // + => converts the string to a number
      this.loadAdminId();
      this.loadData();  
      // this.loadButtonState();
    });
  }

  loadAdminId(){
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.getAdminIdfromEmail(currentUser.email);
      console.log(this.getAdminIdfromEmail(currentUser.email));
    }
  }

  loadData() {
    this.applicantsListService.getPositionName(this.jobId).subscribe(position => {
      this.position = position;	
    });
    this.applicantsListService.getAllApplicants(this.jobId).subscribe(customers => {
      this.customers = customers; 
      console.log(this.customers);

      // // Precompute the hidden state of buttons if necessary
      // this.customers.forEach(customer => {
      //   this.buttonHiddenState[customer.id] = this.buttonClicked.has(customer.id);
      // });
    });
  }

  // loadButtonState() {
  //   // Load button clicked state from local storage
  //   const buttonState = localStorage.getItem('buttonClicked');
  //   if (buttonState) {
  //     this.buttonClicked = new Set<number>(JSON.parse(buttonState));
  //   }
  // }

  // saveButtonState() {
  //   // Save button clicked state to local storage
  //   localStorage.setItem('buttonClicked', JSON.stringify(Array.from(this.buttonClicked)));
  // }

  filterGlobal(event: Event, matchMode: string) {
    const inputElement = event.target as HTMLInputElement;   // here event.target -> input element (treat the event target as an HTML input element)
    this.dt2.filterGlobal(inputElement.value, matchMode);
  }

  handleWordLimitExceeded(id:number, exceeded: boolean) {
    this.applicantsListService.updateCommentExceeded(id, exceeded);
  }

  // checkCommentExist(jobId: number, candidateId: number) {
  //   this.applicantsListService.existComment(jobId, candidateId).subscribe((exists) => {
  //       const customer = this.customers.find(c => c.id === candidateId);
  //       if (customer) {
  //         this.isEditable = !exists;
  //         console.log(this.isEditable);
  //       }
  //     }
  //   );
  // }

  checkCommentExist(jobId: number, candidateId: number): Observable<boolean> {
    // console.log('Reached check comment exist');
    return this.applicantsListService.existComment(jobId, candidateId);
  }

  getAdminIdfromEmail(email: string) {
    this.applicantsListService.getAdminId(email).subscribe(adminId => {
      this.adminId = adminId;
      console.log(this.adminId);
    });
  }

  submitComment(customer: Applicant) {
    if (customer.id && customer.comment !== undefined) {
      this.applicantsListService.updateComment(this.jobId, customer.id, this.adminId, customer.role_Id, customer.comment).subscribe(
        (response) => {
          console.log('Comment submitted successfully');
          // this.buttonClicked.add(customer.id);
          // this.saveButtonState();
        },
        error => {
          console.log('Error in updating comment', error);
        }
      );
    } else {
      console.error('Missing required properties in customer object');
    }
  }

  showStatus(roleId: number): string {
    switch (roleId) {
      case 0:
        return 'Applicant';
      case 7:
        return 'Rejected';
      default:
        return 'Unknown Status'; 
    }
  }
  
  updateRoleId(candidateId: number, roleId: number) {	
    this.applicantsListService.updateRole(candidateId, roleId).subscribe((response) => {
      const customer = this.customers.find(c => c.id === candidateId);
      if (customer) {
        customer.role_Id = roleId;
      }
      // this.buttonClicked.add(candidateId);
      // this.buttonHiddenState[candidateId] = true;
    },
    error => {
      console.log('Error in updating role', error);
    }
  );
  }

  deleteCandidate(candidateId: number) {
    this.applicantsListService.deleteApplicant(candidateId).subscribe((response) => {
      this.customers = this.customers.filter(c => c.id !== candidateId);
    },
    error => {
      console.log('Error in deleting candidate', error);
    }
  );
  }

  // isButtonHidden(candidateId: number): boolean {
  //   console.log("button clicked");
  //   return this.buttonClicked.has(candidateId);
  // }

}
