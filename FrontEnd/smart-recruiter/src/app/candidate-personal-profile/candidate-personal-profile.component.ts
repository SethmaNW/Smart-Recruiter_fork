import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { ActivatedRoute } from '@angular/router'; 
import { ApplicantsListService } from '../services/applicants-list.service';
import { Applicant } from '../models/applicants.model';

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
  public isSelected : boolean = false;
  public isRejected: boolean = false;

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute,
    private applicantsListService: ApplicantsListService
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
    console.log("roleId, candidateId",roleId, candidateId);
    this.applicantsListService.updateRole(candidateId, roleId).subscribe((response) => {

      this.candidate.role_Id = roleId;

      // selected flag related to select button with timeout
      this.isSelected = true;
    
      setTimeout(() => {
        this.isSelected = false;
      }, 2000);       
    },
    error => {
      console.log('Error in updating role', error);
    }
  );
  }

}
