import { Router } from '@angular/router';
import { IBookOptions } from './book.options';
import { AppStateService } from './../shared/appstate.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IBook, IPage } from '../models';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';

declare var $: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, AfterViewInit {

  private $flipBook: any;

  constructor(public state: AppStateService, private router: Router) { }

  ngOnInit(): void {
    if(!this.state.book) {
      this.state.book = {
        title: 'test',
        skin: 'skin1',
        pages: [
          { id: new Date().getTime(), index: 1, defaultUrl: '/assets/template/images/team/member-01.jpg', text: 'page1'},
          { id: new Date().getTime(), index: 2, defaultUrl: '/assets/template/images/team/member-02.jpg', text: 'page2'},
          { id: new Date().getTime(), index: 3, defaultUrl: '/assets/template/images/team/member-03.jpg', text: 'page3'},
          { id: new Date().getTime(), index: 4, defaultUrl: '/assets/template/images/team/member-03.jpg', text: 'page3'}
        ]
      };
    }
  }

  ngAfterViewInit(): void {
    this.$flipBook =  $('.flipbook');
    const options: IBookOptions = {
      autoCenter: true,
      when: {
        turning: (e, page, pageObj) => {},
        turned: (event, page, pageObj) => {},
        start: (event, page, corner) => {},
        end: (e, pageObj) => {},
        missing: (e, pageObj) => {}
      }
    };

    this.$flipBook.turn(options);
  }

  openImageEditor(page: IPage, cropper: ImageCropperComponent) {
    cropper.crop();
    this.state.page = page;
    this.router.navigate(['/image-editor']);
  }

  playClick(){

  }

  nextClick(): void {
    this.$flipBook.turn('next');
  }

  prevClick(): void {
    this.$flipBook.turn('previous');
  }

  firstClick(): void {
    this.$flipBook.turn('page', 1);
  }

  lastClick(): void {
    this.$flipBook.turn('page', this.state.book.pages.length + 4);
  }

  fileChangeEvent(page: IPage, event: any): void {
      const file = event.target.files[0];
      const myReader  = new FileReader();
      myReader.onloadend = (e) => {
        page.imageBase64 = myReader.result.toString();
      };
      myReader.readAsDataURL(file);
  }


  imageCropped(page: IPage, event: ImageCroppedEvent) {
      page.imageBase64 = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

  browseFile(page: IPage) {
    $('#chosser-' + page.index).click();
  }
}
