import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BookComponent } from './book.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgxCropperJsModule } from 'ngx-cropperjs-wrapper';
import { ImagesChooserComponent } from './images-chooser/images-chooser.component';
import { SkinChooserComponent } from './skin-chooser/skin-chooser.component';
import { PagesCarouselComponent } from './pages-carousel/pages-carousel.component';
import { PageCropperComponent } from './pages-carousel/page-cropper/page-cropper.component';
import { ImageItemComponent } from './images-chooser/image-item/image-item.component';
import { PageLayoutsComponent } from './pages-carousel/page-layouts/page-layouts.component';
import { BookService } from './book.service';
import { CreatePopupComponent } from './create-popup/create-popup.component';

@NgModule({
  declarations: [
    BookComponent, 
    ImagesChooserComponent, 
    SkinChooserComponent, 
    PagesCarouselComponent, 
    PageCropperComponent, 
    ImageItemComponent, 
    PageLayoutsComponent, 
    CreatePopupComponent
  ],
  exports: [BookComponent],
  imports: [
    SharedModule,
    RouterModule,
    NgxCropperJsModule
  ],
  providers: [BookService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookModule { }
