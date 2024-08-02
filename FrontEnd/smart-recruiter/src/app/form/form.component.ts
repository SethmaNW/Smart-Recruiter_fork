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

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Handle the valid form submission
      console.log('Form Submitted!', form.value);
    }
  }
  
  onBasicUploadAuto(event: any) {
    const file = event.files[0];  // give the first selected file

    if (file) {
      this.fileName = file.name; 
      // console.log('File uploaded:', file);
    }
  }
}
