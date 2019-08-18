import { IPage } from '../models/page';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser, IBook } from '../models';

declare let componentHandler: any;
@Injectable()
export class AppStateService {

  public user: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
  public page: IPage;
  public book: IBook;
  public appBusy = new BehaviorSubject<boolean>(false);

  // Metrial Design Lite
  public updateMDL(): void {
    if(componentHandler) {
      componentHandler.upgradeDom();
    }
  }

}
