import * as tslib_1 from "tslib";
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
let AboutModule = class AboutModule {
};
AboutModule = tslib_1.__decorate([
    NgModule({
        declarations: [AboutComponent],
        exports: [AboutComponent],
        imports: [
            SharedModule
        ]
    })
], AboutModule);
export { AboutModule };
//# sourceMappingURL=about.module.js.map