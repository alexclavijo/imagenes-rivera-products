import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { AppStateService } from '../../shared/appstate.service';

@Component({
  selector: 'app-book-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  
  @Input()
  public bookFolderName: string;

  public showPreview: boolean;
  public dialogRef: any;
  public url: SafeResourceUrl;

  constructor(private state: AppStateService,
              private element: ElementRef,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.dialogRef = this.element.nativeElement.querySelector('dialog');
  }

  onIframeLoad(): void {
    
  }

  open(): void {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`/book/preview/${this.bookFolderName}`); 
    this.dialogRef.showModal();
    this.state.updateMDL();
  }

  close(): void {
    this.dialogRef.close();
  }
}
