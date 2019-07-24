import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ViewChildren, QueryList, OnChanges, SimpleChanges } from '@angular/core';
import { PageCropperComponent } from './page-cropper/page-cropper.component';
import Cropper from 'cropperjs';


interface ISlideModel {
  index: number;
  photo: File;
  layout: number;
  visible: boolean;
}

@Component({
  selector: 'app-book-pagescarousel',
  templateUrl: './pages-carousel.component.html',
  styleUrls: ['./pages-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PagesCarouselComponent implements OnInit {

  @ViewChildren(PageCropperComponent)
  pageCroppers: QueryList<PageCropperComponent>;

  @Output()
  public pageChangedEvent = new EventEmitter();

  public slides: ISlideModel[];
  public slideSelected: ISlideModel;
  public cropperSelected: Cropper;
  public layoutSelected: number;

  constructor() { }

  ngOnInit() {
    this.layoutSelected = 2;    
  }

  public initSlides(pagesNumber: number, image: File): void {
    this.slides = [];
    for (let index = 1; index <= pagesNumber; index++) {
      this.slides.push({ index, photo: null, layout: this.layoutSelected, visible: false });
    }
    this.slides[0].photo = image;
    setTimeout(() => {
      this.selectSlide(this.slides[0]);
    }, 200);
  }

  public addImageToCurrentSlide(image: File) {
    // this.slideSelected.photo = image;
  } 

  selectSlide(slide: ISlideModel) {
    if(slide.photo) {
      this.slides.forEach(s => s.visible = false);
      this.slideSelected = slide;
      this.slideSelected.visible = true;
      const position = slide.index - 1;
      this.cropperSelected = this.pageCroppers.find((item, index) => index === position).cropper;
      
      // Two Slides Layout
      if(this.layoutSelected === 2) {
        if(this.slideSelected.index % 2 !== 0) { 
          // Odd on Left
          this.slides[position + 1].visible = true;
        } else { 
          // Even on Right
          this.slides[position - 1].visible = true;
        }
      }
    }
  }

  pageLayoutChangeHandled(layout: number) {
    this.layoutSelected = layout;
    this.slideSelected.layout = layout;
    this.selectSlide(this.slideSelected);
  }

  slideRangeChangeHandled(index: number) {
    this.pageChangedEvent.emit(index);
  }
  
  doneClick() {
    // this.cropperSelected.getCroppedCanvas();
  }

  undoClick() {
    this.cropperSelected.reset();
  }

  zoomInClick() {
    this.cropperSelected.zoom(0.1);
  }

  zoomOutClick() {
    this.cropperSelected.zoom(-0.1);
  }

  moveLeftClick() {
    this.cropperSelected.move(-10,0);
  }

  moveRightClick() {
    this.cropperSelected.move(10,0);
  }

  moveUpClick() {
    this.cropperSelected.move(0,-10);
  }

  moveDownClick() {
    this.cropperSelected.move(0,10);
  }

  rotateLeftClick() {
    this.cropperSelected.rotate(-45);
  }

  rotateRightClick() {
    this.cropperSelected.rotate(45);
  }

  removeClick() {
    if(confirm('Are you sure?')) {
      this.slideSelected.photo = null;
    }
  }
}
