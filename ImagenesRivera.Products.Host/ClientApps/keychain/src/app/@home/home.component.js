import * as tslib_1 from "tslib";
import { AppStateService } from './../shared/appstate.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderComponent } from '../shared/loader.component';
let HomeComponent = class HomeComponent extends LoaderComponent {
    constructor(state) {
        super();
        this.state = state;
    }
    ngOnInit() {
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss'],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [AppStateService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map