import { IPage } from './../models/page';
import { IBook } from './../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  
  public book: IBook;
  public photos: File[];

  constructor() { 
  }

  ngOnInit() {
    this.photos = [];
    this.book = { title: 'New Book', skin: 'Default', pages: [] };
    for (let index = 1; index <= 10; index++) {
      this.book.pages.push({
        index,
        photo1: null,
        photo2: null
      });
    }
  }

  imageAddedEventHandled(image: File) {
    this.photos.push(image);
  }  

  pageChangeHandled(index: number) {
   
  }
}
