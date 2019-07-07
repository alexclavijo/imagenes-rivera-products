import { Component, OnInit, Input } from '@angular/core';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-book-pagecropper',
  templateUrl: './page-cropper.component.html',
  styleUrls: ['./page-cropper.component.scss']
})
export class PageCropperComponent implements OnInit {

  @Input()
  public image: File;

  @Input()
  public options: Cropper.Options;

  public cropper: Cropper;

  constructor() { }

  ngOnInit() {
    // this.options = {
    //   dragMode: Cropper.DragMode.Move,
    //   viewMode: Cropper.ViewMode.Free,
    //   minContainerWidth: 750,
    //   minContainerHeight: 750,
    //   minCanvasHeight: 750,
    //   minCanvasWidth: 750,
    //   minCropBoxWidth: 750,
    //   minCropBoxHeight: 750,
    //   aspectRatio: 1,
    //   autoCrop: false,
    //   autoCropArea: 1,
    //   movable: true,
    //   zoomable: true,
    //   zoomOnTouch: true,
    //   zoomOnWheel: true,
    //   scalable: true,
    //   rotatable: true,
    //   restore: true,
    //   guides: false,
    //   center: false,
    //   highlight: false,
    //   cropBoxMovable: false,
    //   cropBoxResizable: false,
    //   toggleDragModeOnDblclick: false,
    //   responsive: true
    // };
  }

  onCropperInit(cropper: Cropper) {
    this.cropper = cropper;
  }

  onFileChange(file: File) {
    // TODO: upload file to backend
  }

  onCrop(event) {

  }

  onZoom(event) {
     
  }

  onFail(error) {
    console.error(error);
  }
}
