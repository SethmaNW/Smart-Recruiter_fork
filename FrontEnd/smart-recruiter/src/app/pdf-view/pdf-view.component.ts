import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.scss']
})
export class PdfViewComponent implements OnInit {

  @Input() visibility! : boolean;
  @Input() candidateId! : number;
  //Emit a event when dialog hides
  @Output() dialogHide = new EventEmitter<void>();;
  public pdfSrc: any;
  public pdfLoaded : boolean = false;

  //str : string = "./assets/ER.drawio.pdf";
  str : string = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor(
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadPdf();
  }

  public visibleChange(){
    this.cdr.detectChanges();
  }

  public onMaximize() {
    this.cdr.detectChanges();
  }

  loadPdf(): void {
    this.http.get(`api/Candidate/cv/${this.candidateId}`).subscribe({
      next: (response: any) => {
        const cvFile = response.cvFile;
        
        const byteCharacters = atob(cvFile);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const uint8Array = new Uint8Array(byteNumbers);

        //console.log('Uint8Array:', uint8Array); // Log the Uint8Array to see the binary data
        // Convert the Uint8Array to a Blob and create an object URL
        const blob = new Blob([uint8Array], { type: 'application/pdf' });
        this.pdfSrc = URL.createObjectURL(blob);
        this.pdfLoaded = true;
      },
      error: (error) => {
        console.error('Error loading PDF file', error);
      }
    });
  }

  afterLoadComplete(): void {
    this.cdr.detectChanges();
  }

  public hideDialog(){
    this.dialogHide.emit();
  }
}

