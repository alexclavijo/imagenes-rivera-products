import * as tslib_1 from "tslib";
import { Component, Input, ElementRef, Output, EventEmitter } from '@angular/core';
let JsCssLoaderComponent = class JsCssLoaderComponent {
    constructor(componentElement) {
        this.componentElement = componentElement;
        this.loadedEvent = new EventEmitter();
        this.loaded = false;
    }
    ngOnInit() {
        if (!this.loaded) {
            this.load().then(() => {
                this.loadedEvent.emit(true);
                this.loaded = true;
                console.log(`${this.url} successfully loaded`);
            }).catch(() => {
                this.loadedEvent.emit(false);
            });
        }
    }
    load() {
        return new Promise((resolve, reject) => {
            let element = null;
            switch (this.type) {
                case 'text/javascript':
                    element = document.createElement('script');
                    element.type = this.type;
                    element.src = `${this.url}?v=${new Date().getTime()}`;
                    element.onload = resolve;
                    break;
                case 'text/css':
                    element = document.createElement('link');
                    element.rel = 'stylesheet';
                    element.type = this.type;
                    element.href = `${this.url}?v=${new Date().getTime()}`;
                    element.onload = resolve;
                    break;
                default: throw new Error('Type missing or not supported');
            }
            this.componentElement.nativeElement.appendChild(element);
        });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], JsCssLoaderComponent.prototype, "url", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], JsCssLoaderComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], JsCssLoaderComponent.prototype, "loadedEvent", void 0);
JsCssLoaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-js-css-loader',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], JsCssLoaderComponent);
export { JsCssLoaderComponent };
//# sourceMappingURL=js-css-loader.component.js.map