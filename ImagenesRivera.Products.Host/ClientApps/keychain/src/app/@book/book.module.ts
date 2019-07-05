import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookComponent } from './book.component';
import { SharedModule } from '../shared/shared.module';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [BookComponent],
  exports: [BookComponent],
  imports: [
    SharedModule,
    RouterModule,
    ImageCropperModule
  ]
})
export class BookModule { }
