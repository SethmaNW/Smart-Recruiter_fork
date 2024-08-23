import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, Renderer2, OnDestroy, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy{

  skillsTooLong = false;
  minDate: Date = new Date(); // Minimum available date for a candidate
  fileUploaded: boolean = false;  // cv file upload status
  fileName : string = ''; // cv file name

  form!: FormGroup; // create parent form group 
  currentStep = 0;  // form steps

  @Output() nextCallback = new EventEmitter<void>();
  @Output() prevCallback = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private renderer: Renderer2, private el: ElementRef) {}
  
  ngOnInit(): void {
    this.initializer();
    this.renderer.addClass(this.el.nativeElement, 'specific-styles');
  }

  ngOnDestroy(): void {
    // Remove custom styles class from host element
    //this.renderer.removeClass(this.el.nativeElement, 'specific-styles');
  }

  initializer(){
    // Add custom styles class to host element
    //this.renderer.addClass(this.el.nativeElement, 'specific-styles');

    // Create a reactive form
    //define each child, form group for every step
    this.form = this.fb.group({
      personalInfo: this.fb.group({
        name: ['', Validators.required],
        phone : ['', Validators.required],
        email: ['', Validators.required],
        github : ['', Validators.pattern('https?://.+')],
        linkedIn : ['', Validators.pattern('https?://.+')]
      }),
      educationInfo: this.fb.group({
        university: ['', Validators.required],
        degree: ['', Validators.required],
        skills: ['', Validators.required],
        workExperience: ['', Validators.required]
      }),
      otherInfo: this.fb.group({
        availableDate: ['', Validators.required],
        reason: [''],
        cv: ['', Validators.required]
      })
    });

    // Manually trigger change detection
    this.cdr.detectChanges();
  }

  nextStep() {
    this.nextCallback.emit();
    this.currentStep++;
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  previousStep() {
    this.prevCallback.emit();
    this.currentStep--;
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  onSubmit() {
    console.log(this.form);
  }
  
  // for the cv upload
  onBasicUploadAuto(event: any) {
    const CvFile = event.files[0];
    this.form.get('otherInfo.cv')?.setValue(CvFile); // Update form control value
    this.fileName = CvFile.name;
    this.cdr.detectChanges(); // Manually trigger change detection
    if (CvFile) {
      this.fileUploaded = true;
      //console.log('File uploaded');
    }
  }

  handleWordLimitExceeded(exceeded: boolean) {
    this.skillsTooLong = exceeded;
  }
}
