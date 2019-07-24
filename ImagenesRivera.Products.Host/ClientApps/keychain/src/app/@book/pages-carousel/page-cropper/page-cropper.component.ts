import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import Cropper from 'cropperjs';
import { pageCropperDefaults } from './page-cropper.defaults';

@Component({
  selector: 'app-book-pagecropper',
  templateUrl: './page-cropper.component.html',
  styleUrls: ['./page-cropper.component.scss']
})
export class PageCropperComponent implements OnInit, OnChanges {

  @Input()
  public image: File;

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
    this.cropperOptions = JSON.parse(JSON.stringify(pageCropperDefaults));
  }
  

  ngOnChanges(changes: SimpleChanges) {
    if (changes.options) {
       for (const prop in changes.options.currentValue) {
            if (prop) {
              this.cropperOptions[prop] = changes.options.currentValue[prop];
            }
       }
    }
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
