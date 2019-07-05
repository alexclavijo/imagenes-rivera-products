import * as tslib_1 from "tslib";
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { WorkComponent } from './work/work.component';
let HomeModule = class HomeModule {
};
HomeModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            HomeComponent,
            HeroComponent,
            WorkComponent
        ],
        imports: [
            SharedModule,
            RouterModule
        ],
        exports: [
            HomeComponent
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map