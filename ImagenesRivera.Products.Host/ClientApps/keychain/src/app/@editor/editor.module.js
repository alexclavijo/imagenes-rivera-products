import * as tslib_1 from "tslib";
import { RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
let EditorModule = class EditorModule {
};
EditorModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            EditorComponent
        ],
        imports: [
            SharedModule,
            RouterModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], EditorModule);
export { EditorModule };
//# sourceMappingURL=editor.module.js.map