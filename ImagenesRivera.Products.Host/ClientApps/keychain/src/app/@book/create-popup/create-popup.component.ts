import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { AppStateService } from '../../shared/appstate.service';


@Component({
  selector: 'app-book-createpopup',
  templateUrl: './create-popup.component.html',
  styleUrls: ['./create-popup.component.scss']
})
export class CreatePopupComponent implements OnInit {
  
  public bookTitle: string;
  public dialogRef: any;
  
  @Output()
  public bookCreatedEvent = new EventEmitter();

  constructor(private state: AppStateService,
              private element: ElementRef,
              private router: Router) { }

  ngOnInit(): void {
    this.dialogRef = this.element.nativeElement.querySelector('dialog');
  }

  open(): void {
    this.dialogRef.showModal();
    this.state.updateMDL();
  }

  close(): void {
    this.dialogRef.close();
    this.router.navigate(['/']);
  }

  createClick(): void {
    this.bookCreatedEvent.emit(this.bookTitle);
  }
}
