import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.scss']
})
export class PdfViewComponent implements OnInit {

  @Input() visibility! : boolean;
  @Input() candidateId! : number;
  public pdfSrc: Uint8Array | undefined;

  //str : string = "./assets/ER.drawio.pdf";
  str : string = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor(
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    //this.loadPdf();
  }

  public visibleChange(){
    this.cdr.detectChanges();
  }

  public onMaximize() {
    this.cdr.detectChanges();
  }

  loadPdf(): void {
    this.http.get(`api/Candidate/cv/${this.candidateId}`, { responseType: 'arraybuffer' }).subscribe({
      next: (response: ArrayBuffer) => { this.pdfSrc = new Uint8Array(response); },
      error: (error) => { console.error('Error loading PDF file', error); },
    });
  }

  afterLoadComplete(): void {
    this.cdr.detectChanges();
  }
}
