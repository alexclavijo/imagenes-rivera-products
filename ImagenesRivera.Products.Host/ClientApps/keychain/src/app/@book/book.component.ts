import { IPageSave } from './../models/page';
import { IBook } from './../models/book';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PagesCarouselComponent,  ICroppedCanvas } from './pages-carousel/pages-carousel.component';
import { BookService } from './book.service';
import { IPage } from '../models/page';
import { AppStateService } from '../shared/appstate.service';
import { CreatePopupComponent } from './create-popup/create-popup.component';
import { environment } from '../../environments/environment';
import { PreviewComponent } from './preview/preview.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, AfterViewInit {
  

  @ViewChild(PagesCarouselComponent, { static: false }) 
  private carousel: PagesCarouselComponent;

  @ViewChild(CreatePopupComponent, { static: false }) 
  private createPopup: CreatePopupComponent;

  @ViewChild(PreviewComponent, { static: false }) 
  private bookPreview: PreviewComponent;

  public book: IBook;
  public pagesNumber: number; 

  constructor(private bookService: BookService, public state: AppStateService) {}

  ngOnInit() {    
    
  }

  ngAfterViewInit(): void {
    this.createPopup.open();
  }

  imageAddedEventHandled(image: File) {
    if(!this.pagesNumber) {
      this.pagesNumber = environment.bookPagesNumber;
      this.carousel.initSlides(this.pagesNumber, image);
    } else {
      this.carousel.addImageToCurrentSlide(image);
    }
  } 

  bookCreatedEventHandler(title: string) {
    this.bookService.createBook({ title, pagesNumber: this.pagesNumber })
        .subscribe((folderName: string) => {
          this.book = { title, folderName };
          this.createPopup.close();
        });
  }

  previewClick() {
    this.bookPreview.open();
  }

  buyAlbumClick() {
    //this.state.appBusy.next(true);
    const bookPages: Array<IPageSave> = [];
    this.carousel.cropPageCanvas().subscribe((cropped: ICroppedCanvas) => {
        bookPages.push({ 
          index: cropped.index, 
          file: new File([cropped.blob], `page${cropped.index}.jpeg`, { lastModified: new Date().getTime() }), 
          bookFolderName: this.book.folderName 
        });
    },(error) => {
         console.log('Error occurred: ' + error);
        // this.state.appBusy.next(false);
    }, () => {
        this.bookService.saveBookPages(this.book.folderName, bookPages).subscribe((pages: IPage[]) => {
          this.book.pages = pages.sort((a,b) => a.index > b.index ? 1 : a.index < b.index ? -1 : 0);
        //  this.state.appBusy.next(false);
        });
    });
  }
}
