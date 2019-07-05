import * as tslib_1 from "tslib";
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
let ContactModule = class ContactModule {
};
ContactModule = tslib_1.__decorate([
    NgModule({
        declarations: [ContactComponent],
        exports: [ContactComponent],
        imports: [
            SharedModule
        ]
    })
], ContactModule);
export { ContactModule };
//# sourceMappingURL=contact.module.js.map