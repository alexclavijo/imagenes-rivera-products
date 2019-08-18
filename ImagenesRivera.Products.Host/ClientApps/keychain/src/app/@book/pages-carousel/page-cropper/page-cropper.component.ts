import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-book-pagecropper',
  templateUrl: './page-cropper.component.html',
  styleUrls: ['./page-cropper.component.scss']
})
export class PageCropperComponent implements OnInit {

  @Input()
  public imageFile: File;

  @Input()
  public layout: number;

  @Input()
  public selected: boolean;

  @Input()
  public slideIndex: number;

  @Input()
  public options: Cropper.Options;

  public cropper: Cropper;
  public cropperOptions: Cropper.Options;

  constructor() { }

  ngOnInit() {
    this.cropperOptions =  {
      dragMode: 'move' as Cropper.DragMode.Move,
      viewMode: 0 as Cropper.ViewMode.Free,
      minContainerWidth: 420,
      minContainerHeight: 400,
      minCanvasWidth: 420,
      minCanvasHeight: 400,
      minCropBoxWidth: 380,
      minCropBoxHeight: 380,
      background: true, 
      autoCrop: true,
      aspectRatio: 1/1,
      movable: true,
      zoomable: true,
      zoomOnTouch: false,
      zoomOnWheel: false,
      scalable: true,
      rotatable: true,
      restore: false,
      guides: false,
      center: true,
      highlight: false,
      cropBoxMovable: false,
      cropBoxResizable: false,
      toggleDragModeOnDblclick: false,
      responsive: true,
      ready: () => {
        this.cropper.setCropBoxData({ width: 380.0, height: 380.0, top: 10, left: 10 });
        
      }
    };
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes.options) {
  //      for (const prop in changes.options.currentValue) {
  //           if (prop) {
  //             this.cropperOptions[prop] = changes.options.currentValue[prop];
  //           }
  //      }
  //   }
  // }
  
  onCropperInit(cropper: Cropper) {
    this.cropper = cropper;
  }

  onFileChange(file: File) {
    // TODO: upload file to backend
  }

  onCrop(event) {
     console.log(event);
  }

  onZoom(event) {
     
  }

  onFail(error) {
    console.error(error);
  }

  
}
