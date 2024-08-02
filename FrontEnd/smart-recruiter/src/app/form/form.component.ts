import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent {
  fileName: string | null = null;

  onBasicUploadAuto(event: any) {
    const file = event.files[0];  // give the first selected file

    if (file) {
      this.fileName = file.name; 
      // console.log('File uploaded:', file);
    }
  }
}
