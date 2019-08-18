import { IPage, IPageSave } from './../models/page';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { IBookSave } from '../models/book';




@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  public createBook(book: IBookSave): Observable<string> {
    return this.http.post<string>('/api/books', book);
  }

  public saveBookPages(bookNameFolder: string, pages: IPageSave[]): Observable<IPage[]> {
    const responses: Array<Observable<IPage>> = [];
    pages.forEach((page: IPageSave) => {
      const pageData = new FormData();
      pageData.set('bookFolderName', page.bookFolderName);
      pageData.set('index', page.index.toString());
      pageData.set('file', page.file);
      responses.push(this.http.put<IPage>(`/api/books/${bookNameFolder}/page`, pageData));
    });
    return forkJoin(responses);
  }

}
