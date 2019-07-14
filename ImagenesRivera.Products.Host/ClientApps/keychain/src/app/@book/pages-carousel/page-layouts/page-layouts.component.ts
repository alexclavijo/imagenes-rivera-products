import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-pagelayouts',
  templateUrl: './page-layouts.component.html',
  styleUrls: ['./page-layouts.component.scss']
})
export class PageLayoutsComponent implements OnInit {

  @Output()
  public pageLayoutChangeEvent = new EventEmitter();

  public layoutSelected = 2;

  constructor() { }

  ngOnInit() {
  }

  layoutChangedClick(layout: number) {
    this.layoutSelected = layout;
    this.pageLayoutChangeEvent.emit(layout);
  }
}
