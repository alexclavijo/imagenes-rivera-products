import { IBook } from './../models/book';
import { Component, OnInit,AfterViewInit, ViewChild} from '@angular/core';
import { PagesCarouselComponent } from './pages-carousel/pages-carousel.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, AfterViewInit {

  @ViewChild(PagesCarouselComponent, { static: false }) 
  private carousel: PagesCarouselComponent;

  public book: IBook;
  public pagesNumber: number; 

  constructor() {}

  ngOnInit() {    
  }

  ngAfterViewInit(): void {
    
  } 

  imageAddedEventHandled(image: File) {
    if(!this.pagesNumber) {
      this.pagesNumber = 10;
      this.carousel.initSlides(this.pagesNumber, image);
    } else {
      this.carousel.addImageToCurrentSlide(image);
    }
  }  

  pageChangeHandled(index: number) {
   
  }
}
