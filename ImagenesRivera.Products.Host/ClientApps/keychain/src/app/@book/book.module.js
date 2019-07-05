import * as tslib_1 from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookComponent } from './book.component';
import { SharedModule } from '../shared/shared.module';
import { ImageCropperModule } from 'ngx-image-cropper';
let BookModule = class BookModule {
};
BookModule = tslib_1.__decorate([
    NgModule({
        declarations: [BookComponent],
        exports: [BookComponent],
        imports: [
            SharedModule,
            RouterModule,
            ImageCropperModule
        ]
    })
], BookModule);
export { BookModule };
//# sourceMappingURL=book.module.js.map