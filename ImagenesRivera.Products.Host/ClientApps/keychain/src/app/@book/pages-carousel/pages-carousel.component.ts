import { IPage } from './../../models/page';
import { IBook } from './../../models/book';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

interface ISlideModel {
  photo: File;
  layout: number;
}

@Component({
  selector: 'app-book-pagescarousel',
  templateUrl: './pages-carousel.component.html',
  styleUrls: ['./pages-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PagesCarouselComponent implements OnInit {

  @ViewChild('carousel', { static: false })
  public carousel: CarouselComponent;

  @Input()
  public photos: File[];

  @Output()
  public pageChangedEvent = new EventEmitter();

  public slides: ISlideModel[];
  public slideSelected: number;
  public layoutSelected: number;

  constructor() { }

  ngOnInit() {
   this.layoutSelected = 2;
  }
  
  activeSlideChangeHandled(index: number) {
    
  }

  slideRangeChangeHandled(index: number) {
    this.pageChangedEvent.emit(index);
  }

  pageLayoutChangeHandled(layout: number) {
    this.layoutSelected = layout;
  }

  public get slideSelectedEven(): boolean {
    return this.slideSelected && this.slideSelected % 2 === 0;
  }
  
 
}
