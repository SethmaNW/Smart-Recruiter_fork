import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Candidate } from 'src/app/shared/models/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public formSubmitted : boolean = false;

  constructor(private http : HttpClient) { }

  public submitForm(form : FormGroup, jobId : number | undefined) : void{
    const CvFile : File = form.value.otherInfo.cv;
    const candidate: Candidate = {
      Name : form.value.personalInfo.name,
      Contact : form.value.personalInfo.phone,
      Email : form.value.personalInfo.email,
      Skills : form.value.educationInfo.skills,
      Available_Date : form.value.otherInfo.availableDate,
      GitHub_Link : form.value.personalInfo.github,
      LinkedIn : form.value.personalInfo.linkedIn,
      Degree : form.value.educationInfo.degree,
      University : form.value.educationInfo.university,
      Reason : form.value.otherInfo.reason,
      Experience : form.value.educationInfo.workExperience,
    };

    const formData = new FormData();
    formData.append('Candidate', JSON.stringify(candidate));
    formData.append('CvFile', CvFile);

    //path the jobId as the route parameter
    const url = `api/Candidate/${jobId}`;
    this.http.post(url, formData).subscribe((res) => {
      //console.log(res);
      if (res){
        window.scrollTo(0, 0);
        this.formSubmitted = true;
        setTimeout(() => {
          this.formSubmitted = false;
          window.location.reload(); // Refresh the page
        }, 3000);
      }
    });
  }
}
