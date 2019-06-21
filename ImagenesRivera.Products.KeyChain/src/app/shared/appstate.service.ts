import { IPhoto } from '../models/photo';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser, IBook } from '../models';

@Injectable()
export class AppStateService {

  public user: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

  public photo: IPhoto;

  public book: IBook;

}
