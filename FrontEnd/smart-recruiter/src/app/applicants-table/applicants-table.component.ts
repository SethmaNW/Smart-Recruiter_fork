import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Table } from 'primeng/table';
import { ApplicantsListService } from '../services/applicants-list.service';
import { ActivatedRoute } from '@angular/router';
import { Applicant } from '../models/applicants.model';
import { AuthenticationService } from '../services/authentication.service';
import { ConfirmationService } from 'primeng/api';
import { SlidersService } from '../sliders/sliders.service';

@Component({
  selector: 'app-applicants-table',
  templateUrl: './applicants-table.component.html',
  styleUrls: ['./applicants-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApplicantsTableComponent implements OnInit {
  public customers: Applicant[] = [];
  // selectedCustomer!: Applicant;
  public selectedCustomer: Applicant | null = null;
  private loading: boolean = true;
  // commentExceeded = false;
  private position: string = '';
  public jobId!: number;  // Declare jobId as a class property
  private adminId!: number;
  // buttonClicked: Set<number> = new Set();    // use Angular’s property binding
  public cols: any[] = [];
  public selectedColumns: any[] = [];
  public visible: boolean = false;
  // private candidatesWithComments: number[] = [];
  public deleteVisible: boolean = false;
  public isSelected : boolean = false;
  public isRejected: boolean = false;
  public isDeleted: boolean = false;
  // candidate cv dialog box
  public visibility: boolean = false;
  public candidateIdCvPopUp!: number;
  public cVPopUpComponentMount : boolean = false;

  @Input() roleId: number = 1;
  @Output() jobIdChange: EventEmitter<number> = new EventEmitter<number>(); 
  @Output() isSelectedChange = new EventEmitter<boolean>();
  @Output() isRejectedChange = new EventEmitter<boolean>();
  @Output() isDeletedChange = new EventEmitter<boolean>();

  @ViewChild('dt2') dt2!: Table; // ViewChild to access the p-table

  constructor(
    private applicantsListService: ApplicantsListService, 
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private confService: ConfirmationService,
    private cd: ChangeDetectorRef,
    public sliderSVC : SlidersService
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

  editableStates: { [candidateId: number]: boolean } = {};

  ngOnInit():void {
    this.callInitializer();
  }  

  callInitializer():void {
    // column selection for the table
    this.cols = [      
      { field: 'available_Date', header: 'Available Date' },
      { field: 'experience', header: 'Experience' },
      // { field: 'skills', header: 'Skills' },
      // { field: 'reason', header: 'Reason' },
      { field: 'comment', header: 'Comment' }
    ];
    // this.selectedColumns = this.cols;
    this.selectedColumns = [];

    // Get the jobId from the route parameters
    this.route.queryParamMap.subscribe(params => {
      this.jobId = +params.get('jobId')!;    // + => converts the string to a number
      this.loadAdminId();
      // this.loadData();  
      this.loadRelevantData(this.roleId);
      this.cd.detectChanges();   // this doesn't work - used to manually trigger change detection in pop up dialog
    });

    this.jobIdChange.emit(this.jobId);
  }

  loadAdminId():void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.getAdminIdfromEmail(currentUser.email);
      console.log(this.getAdminIdfromEmail(currentUser.email));
    }
  }

  // loadData() {
  //   this.applicantsListService.getPositionName(this.jobId).subscribe(position => {
  //     this.position = position;	
  //   });
  //   this.applicantsListService.getAllApplicants(this.jobId).subscribe(customers => {
  //     this.customers = customers; 
  //     console.log(this.customers);

  //     // // Precompute the hidden state of buttons if necessary
  //     // this.customers.forEach(customer => {
  //     //   this.buttonHiddenState[customer.id] = this.buttonClicked.has(customer.id);
  //     // });
  //   });
  // }

  loadRelevantData(roleId: number):void {
    // this.applicantsListService.getPositionName(this.jobId).subscribe(position => {
    //   this.position = position;	
    // });
    this.applicantsListService.getAllApplicants(this.jobId).subscribe(customers => {
      this.customers = customers.filter(customer => customer.role_Id === roleId); 
      console.log(this.customers);
    });
  }

  // to disable comment button   ----- no need
  // loadCandidatesWithComments() {
  //   this.applicantsListService.getCandidateIdsWithComments(this.jobId).subscribe(candidateIds => {
  //     // console.log('Candidate IDs with comments:', candidateIds);
  //     // candidateIds.forEach(candidateId => {
  //     //   this.editableStates[candidateId] = false;
  //     // });
  //     this.candidatesWithComments = candidateIds;
  //   });
  // }

  // isCommentDisabled(candidateId: number): boolean {
  //   return this.candidatesWithComments.includes(candidateId);
  // }

  getAdminIdfromEmail(email: string):void {
    this.applicantsListService.getAdminId(email).subscribe(adminId => {
      this.adminId = adminId;
      console.log(this.adminId);
    });
  }

  filterGlobal(event: Event, matchMode: string):void {
    const inputElement = event.target as HTMLInputElement;   // here event.target -> input element (treat the event target as an HTML input element)
    this.dt2.filterGlobal(inputElement.value, matchMode);
  }

  handleWordLimitExceeded(id:number, exceeded: boolean):void {
    this.applicantsListService.updateCommentExceeded(id, exceeded);
  }

  showDialog(customer: Applicant):void {
    this.selectedCustomer = { ...customer };    // Set the selected customer
    this.visible = true;
  }

  submitComment():void {
    if (this.selectedCustomer && this.selectedCustomer.id && this.selectedCustomer.comment !== undefined) {
      // console.log('Comment: ', this.selectedCustomer.comment, this.selectedCustomer.id);
      this.applicantsListService.updateComment(
        this.jobId,
        this.selectedCustomer.id,
        this.adminId,
        this.selectedCustomer.role_Id,
        this.selectedCustomer.comment
      ).subscribe(
        (response) => {
          console.log('Comment submitted successfully');
          // Update the local customer data
          const updatedCustomer = this.customers.find(c => c.id === this.selectedCustomer!.id);
          if (updatedCustomer) {
            updatedCustomer.comment = this.selectedCustomer!.comment;
            // this.editableStates[updatedCustomer.id] = false;
          }
          this.visible = false; 
        },
        error => {
          console.log('Error in updating comment', error);
        }
      );
    } else {
      console.error('Missing required properties in selectedCustomer object');
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
  
  updateRoleId(candidateId: number, roleId: number):void {	
    this.applicantsListService.updateRole(candidateId, roleId).subscribe((response) => {
      const customer = this.customers.find(c => c.id === candidateId);
      if (customer) {
        customer.role_Id = roleId;

        // selected flag related to select button with timeout
        if(roleId===1){
          this.isSelected = true;
          this.isSelectedChange.emit(this.isSelected);    // Emit the updated isSelected value
          setTimeout(() => {
            this.isSelected = false;
            this.isSelectedChange.emit(this.isSelected);
          }, 2000);
        }
        else if(roleId===7){
          this.isRejected = true;
          // console.log("rejected: ", this.isRejected);
          this.isRejectedChange.emit(this.isRejected);   
          setTimeout(() => {
            this.isRejected = false;
            this.isRejectedChange.emit(this.isRejected);
          }, 2000);
        }

        this.loadRelevantData(this.roleId);        
      }
      // this.loadData();
      // this.cd.detectChanges();
    },
    error => {
      console.log('Error in updating role', error);
    }
  );
  }

  deleteCandidate(candidateId: number):void {
    this.applicantsListService.deleteApplicant(candidateId).subscribe(
      (response) => {
        this.customers = this.customers.filter(c => c.id !== candidateId);
        this.cd.detectChanges();
        console.log('Candidate deleted successfully');
      },
      error => {
        console.log('Error in deleting candidate', error);
      }
    );
  }
  
  confirmDelete(candidateId: number):void {
    this.deleteVisible = true;
    this.confService.confirm({
      message: 'Do you want to delete this candidate Permanently?',
      header: 'Delete Confirmation',
      // icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteCandidate(candidateId);
        this.deleteVisible = false;

        // Rejected flag related to select button with timeout
        this.isDeleted = true;
        this.isDeletedChange.emit(this.isDeleted);   
        setTimeout(() => {
          this.isDeleted = false;
          this.isDeletedChange.emit(this.isDeleted);
        }, 2000);
        
      },
      reject: () => {
        this.deleteVisible = false;
        console.log('Delete operation cancelled');
      }
    });
  }

  public showCvDialog(event : Event, candidateId : number) {
    this.candidateIdCvPopUp = candidateId;
    this.cVPopUpComponentMount = true;
    event.preventDefault();
    this.visibility = true;
    //console.log("cv dialog box opened");
  }

  // hiding the cv popup
  public dialogHide(){
    this.visibility = false;
    this.cVPopUpComponentMount = false;
    //console.log("cv dialog box closed");
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

  // preloadEditableStates() {
  //   this.customers.forEach(customer => {
  //     this.checkCommentExist(this.jobId, customer.id).subscribe(exists => {
  //       this.editableStates[customer.id] = !exists;
  //     });
  //   });
  // }

  // checkCommentExist(jobId: number, candidateId: number): Observable<boolean> {
  //   // console.log('Reached check comment exist');
  //   // console.log(this.applicantsListService.existComment(jobId, candidateId));
  //   return this.applicantsListService.existComment(jobId, candidateId);
  // }

  // isCommentEditable(customer: Applicant): Observable<boolean> {
  //   // console.log('Checking :', this.checkCommentExist(this.jobId, customer.id));
  //   return this.checkCommentExist(this.jobId, customer.id);
  // }

}
