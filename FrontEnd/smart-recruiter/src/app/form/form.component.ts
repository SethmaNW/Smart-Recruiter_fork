import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent {
  fileName: string | null = null;
  skillsTooLong = false;
  fileUploaded: boolean = false;
  availableDate : any;
  minDate: Date = new Date();

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Handle the valid form submission
      console.log('Form Submitted!', form.value);
    }
  }
  
  // for the cv upload
  onBasicUploadAuto(event: any) {
    const file = event.files[0];  // give the first selected file

    if (file) {
      this.fileName = file.name; 
      this.fileUploaded = true;
      // console.log('File uploaded:', file);
    }
  }

  handleWordLimitExceeded(exceeded: boolean) {
    this.skillsTooLong = exceeded;
  }
}
