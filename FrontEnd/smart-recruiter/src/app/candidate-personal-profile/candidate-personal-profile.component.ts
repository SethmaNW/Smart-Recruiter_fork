import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-candidate-personal-profile',
  templateUrl: './candidate-personal-profile.component.html',
  styleUrls: ['./candidate-personal-profile.component.scss']
})
export class CandidatePersonalProfileComponent implements OnInit {

  candidateId: number | undefined;
  candidate: any;
  // block the loading of the card until the data is received
  isloaded: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => { 
      this.candidateId = params['candidateId']
    });
    this.http.get<any>('api/Candidate/'+this.candidateId).subscribe((data) => {
      this.candidate = data;
      //console.log("date received", data);
      this.isloaded = true;
    });
    
  }

}
