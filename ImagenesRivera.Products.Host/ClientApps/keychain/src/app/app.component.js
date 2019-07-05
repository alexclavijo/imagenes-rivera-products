import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'Imagenes Rivera - KeyChain';
    }
    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.updateMDL();
                this.autoCloseSideBar();
            }
        });
    }
    // Metrial Design Lite
    updateMDL() {
        componentHandler.upgradeDom();
    }
    autoCloseSideBar() {
        setTimeout(() => {
            const $menuBtn = $('#collopse-button');
            if ($menuBtn.hasClass('active')) {
                $('#collopse-button').trigger('click');
            }
        }, 200);
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map