import * as tslib_1 from "tslib";
var SharedModule_1;
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JsCssLoaderComponent } from './js-css-loader/js-css-loader.component';
import { AppStateService } from './appstate.service';
let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule_1,
            providers: [AppStateService]
        };
    }
};
SharedModule = SharedModule_1 = tslib_1.__decorate([
    NgModule({
        declarations: [
            JsCssLoaderComponent
        ],
        imports: [
            CommonModule,
            HttpClientModule
        ],
        exports: [
            CommonModule,
            HttpClientModule,
            JsCssLoaderComponent
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map