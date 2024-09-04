import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { ActivatedRoute } from '@angular/router'; 
import { ApplicantsListService } from '../services/applicants-list.service';
import { Applicant } from '../models/applicants.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-candidate-personal-profile',
  templateUrl: './candidate-personal-profile.component.html',
  styleUrls: ['./candidate-personal-profile.component.scss']
})
export class CandidatePersonalProfileComponent implements OnInit {
  customers: Applicant[] = [];
  candidateId: number | undefined;
  candidate: any;
  // block the loading of the card until the data is received
  isloaded: boolean = false;
  isSelected : boolean = false;
  isRejected: boolean = false;

  // candidate cv dialog box
  public visibility: boolean = false;

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute,
    private applicantsListService: ApplicantsListService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // this.customers = [];

    this.route.queryParams.subscribe(params => { 
      this.candidateId = params['candidateId']
    });

    this.http.get<any>('api/Candidate/'+this.candidateId).subscribe((data) => {
      this.candidate = data;
      //console.log("date received", data);
      this.isloaded = true;
    }); 
  }

  updateRoleId(candidateId: number, roleId: number) {	
    //console.log("roleId, candidateId",roleId, candidateId);
    this.applicantsListService.updateRole(candidateId, roleId).subscribe((response) => {

      this.candidate.role_Id = roleId;

      // selected flag related to select button with timeout
      if(roleId===2 || roleId===3){
        this.isSelected = true;
    
        setTimeout(() => {
          this.isSelected = false;
          this.location.back(); // Redirect to the previous page
        }, 2000); 
      }
      else if(roleId===7){
        this.isRejected = true;
    
        setTimeout(() => {
          this.isRejected = false;
          this.location.back(); 
        }, 2000);
      }
            
    },
    error => {
      console.log('Error in updating role', error);
    }
  );
  }

  public showCvDialog(event : Event) {
    event.preventDefault();
    this.visibility = true;
    console.log("cv dialog box opened");
  }
}
