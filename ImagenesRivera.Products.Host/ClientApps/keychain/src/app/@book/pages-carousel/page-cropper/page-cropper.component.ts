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

  public cropper: any;
  public cropperOptions: Cropper.Options;

  constructor() { }

  ngOnInit() {
    this.cropperOptions =  {
      dragMode: 'move' as Cropper.DragMode.Move,
      viewMode: 0 as Cropper.ViewMode.Free,
      background: false, 
      autoCrop: true,
      aspectRatio: 1/1,
      minContainerHeight: 380,
      minContainerWidth: 380,
      minCanvasHeight: 380,
      minCanvasWidth: 380,
      minCropBoxHeight: 350,
      minCropBoxWidth: 350,
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
        
        this.cropper.setCanvasData({ 
          width: 591, 
          height: 591,
          top: 0,
          left: 0
        });

        this.cropper.setCropBoxData({ 
          width: 355,
          height: 355,
          top: 10,
          left: 10
        });
      }
    };
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
