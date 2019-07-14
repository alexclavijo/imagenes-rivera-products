import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ViewChildren, QueryList } from '@angular/core';
import { PageCropperComponent } from './page-cropper/page-cropper.component';
import Cropper from 'cropperjs';

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

  @ViewChildren(PageCropperComponent)
  pageCroppers: QueryList<PageCropperComponent>;

  @Input()
  public photos: File[];

  @Output()
  public pageChangedEvent = new EventEmitter();

  public slides: ISlideModel[];
  public slideSelected: number;
  public cropperSelected: Cropper;
  public layoutSelected: number;

  constructor() { }

  ngOnInit() {
   this.layoutSelected = 2;
  }

  public get slideSelectedEven(): boolean {
    return this.slideSelected && this.slideSelected % 2 === 0;
  }
  
  selectSlideClick(slide: number) {
    this.slideSelected = slide;
    this.cropperSelected = this.pageCroppers.find((item, index) => index === (slide - 1)).cropper;
  }

  activeSlideChangeHandled(index: number) {
    
  }

  slideRangeChangeHandled(index: number) {
    this.pageChangedEvent.emit(index);
  }

  pageLayoutChangeHandled(layout: number) {
    this.layoutSelected = layout;
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
}
