import { Component, OnInit, Input, ViewChild} from '@angular/core';
import Cropper from 'cropperjs';
import { pageCropperDefaults } from './page-cropper.defaults';

@Component({
  selector: 'app-book-pagecropper',
  templateUrl: './page-cropper.component.html',
  styleUrls: ['./page-cropper.component.scss']
})
export class PageCropperComponent implements OnInit {

  @ViewChild('canvas', { static: false })
  private canvas: any;

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
    this.cropperOptions = JSON.parse(JSON.stringify(pageCropperDefaults));
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const image = new Image();
      image.onload = () => {
        this.initCanvas(image);
      };
      image.src = event.target.result;
    };
    reader.readAsDataURL(this.imageFile);
  }

  initCanvas(image: HTMLImageElement) {
    const canvasElement = this.canvas.nativeElement as HTMLCanvasElement;
    canvasElement.width = 420;
    canvasElement.height = 400;
    const ctx = canvasElement.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 420, 400);
    ctx.drawImage(image, 10, 10, 300, 300);

    this.cropper = new Cropper(canvasElement);
    this.cropper.setCropBoxData({ top: 0, left: 0, width: 400, height: 400});

  }
  
}
