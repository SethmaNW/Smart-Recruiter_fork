import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  skillsTooLong = false;
  minDate: Date = new Date(); // Minimum available date for a candidate
  CvFile: File | undefined = undefined; //Cv uploading file
  fileName: string | undefined = undefined; //cv file name
  fileUploaded: boolean = false;  // cv file upload status

  form!: FormGroup; // create parent form group 
  currentStep = 0;  // form steps

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    //define each child, form group for every step
    this.form = this.fb.group({
      personalInfo: this.fb.group({
        name: [''],
        phone : [''],
        email: [''],
        githubLink : [''],
        linkedIn : ['']
      }),
      addressInfo: this.fb.group({
        address: [''],
        city: ['']
      }),
      paymentInfo: this.fb.group({
        cardNumber: [''],
        expiryDate: ['']
      })
    });
  }

  nextStep() {
    this.currentStep++;
  }

  previousStep() {
    this.currentStep--;
  }

  onSubmit() {
    
  }
  
  // for the cv upload
  onBasicUploadAuto(event: any) {
    this.CvFile = event.files[0];
    this.fileName = this.CvFile?.name;
    if (this.CvFile) {
      this.fileUploaded = true;
      //console.log('File uploaded');
    }
  }

  handleWordLimitExceeded(exceeded: boolean) {
    this.skillsTooLong = exceeded;
  }
}
