import { IPage } from '../models/page';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser, IBook } from '../models';

@Injectable()
export class AppStateService {

  public user: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

  public page: IPage;

  public book: IBook;

}
