import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ViewChildren, QueryList, OnChanges, SimpleChanges } from '@angular/core';
import { PageCropperComponent } from './page-cropper/page-cropper.component';
import Cropper from 'cropperjs';


interface ISlideModel {
  index: number;
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
      this.slides.push({ index, photo: null, layout: this.layoutSelected });
    }
    this.slides[0].photo = image;
    setTimeout(() => {
      this.selectSlide(this.slides[0]);
    }, 1000);
  }

  public addImageToCurrentSlide(image: File) {
    // this.slideSelected.photo = image;
  }

  public get slideSelectedEven(): boolean {
    return this.slideSelected && this.slideSelected.index % 2 === 0;
  }

  selectSlide(slide: ISlideModel) {
    this.slideSelected = slide;
    this.cropperSelected = this.pageCroppers.find((item, index) => index === (slide.index - 1)).cropper;
  }

  slideRangeChangeHandled(index: number) {
    this.pageChangedEvent.emit(index);
  }

  pageLayoutChangeHandled(layout: number) {
    this.layoutSelected = layout;
    this.slideSelected.layout = layout;
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
    this.slideSelected.photo = null;
  }
}
