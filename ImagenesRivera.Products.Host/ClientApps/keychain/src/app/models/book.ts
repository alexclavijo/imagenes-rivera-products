import { IPage } from './page';

export interface IBookSave {
   title: string;
   pagesNumber: number;
}

export interface IBook {
   title: string;
   folderName: string;
   skin?: string;
   pages?: IPage[];
}
