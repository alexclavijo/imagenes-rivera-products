import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BookComponent } from './book.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgxCropperJsModule } from 'ngx-cropperjs-wrapper';
import { ImagesChooserComponent } from './images-chooser/images-chooser.component';
import { SkinChooserComponent } from './skin-chooser/skin-chooser.component';
import { PagesCarouselComponent } from './pages-carousel/pages-carousel.component';
import { PageCropperComponent } from './pages-carousel/page-cropper/page-cropper.component';
import { ImageItemComponent } from './images-chooser/image-item/image-item.component';

@NgModule({
  declarations: [
    BookComponent, 
    ImagesChooserComponent, 
    SkinChooserComponent, 
    PagesCarouselComponent, 
    PageCropperComponent, 
    ImageItemComponent
  ],
  exports: [BookComponent],
  imports: [
    SharedModule,
    RouterModule,
    CarouselModule,
    NgxCropperJsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookModule { }
