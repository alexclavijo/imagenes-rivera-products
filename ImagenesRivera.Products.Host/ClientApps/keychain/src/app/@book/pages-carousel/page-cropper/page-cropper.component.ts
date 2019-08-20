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

  public cropperSingle: Cropper;
  public cropperSingleOptions: Cropper.Options;
  public cropperFull: Cropper;
  public cropperFullOptions: Cropper.Options;

  constructor() { }

  ngOnInit() {
    const defaultOptions =  {
      dragMode: 'move' as Cropper.DragMode.Move,
      viewMode: 0 as Cropper.ViewMode.Free,
      minContainerHeight: 380,
      minCanvasHeight: 380,
      minCropBoxHeight: 350,
      background: false, 
      autoCrop: true,
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
      responsive: true
    };

    this.cropperSingleOptions = JSON.parse(JSON.stringify(defaultOptions));     
    this.cropperSingleOptions.aspectRatio = 1/1;
    this.cropperSingleOptions.minContainerWidth = 380;
    this.cropperSingleOptions.minCanvasWidth = 380;
    this.cropperSingleOptions.minCropBoxWidth = 350;
    this.cropperSingleOptions.ready = () => {
      this.setupCanvasSinglePage();
    };

    this.cropperFullOptions = JSON.parse(JSON.stringify(defaultOptions));
    this.cropperFullOptions.aspectRatio = 2/1;
    this.cropperFullOptions.minContainerWidth = 760;
    this.cropperFullOptions.minCanvasWidth = 760;
    this.cropperFullOptions.minCropBoxWidth = 700;
    this.cropperFullOptions.ready = () => {
      this.setupCanvasFullPage();
    };
  }

  private setupCanvasSinglePage(): void {
      this.cropperSingle.setCanvasData({ 
        width: 380, 
        height: 380,
        top: 0,
        left: 0
      });
      this.cropperSingle.setCropBoxData({ 
        width: 355,
        height: 355,
        top: 10,
        left: 10
      });
  }

  private setupCanvasFullPage(): void {
    this.cropperFull.setCanvasData({ 
      width: 760, 
      height: 380,
      top: 0,
      left: 0
    });
    this.cropperFull.setCropBoxData({ 
      width: 710,
      height: 355,
      left: 25,
      top: 12.5
    });
  }

  public get cropper(): Cropper {
    return this.layout === 1 ? this.cropperFull : this.cropperSingle;
  }
  
  onCropperInit(cropper: Cropper) {
    if(this.layout === 1) {
      this.cropperFull = cropper;
    } else {
      this.cropperSingle = cropper;
    }
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
