import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderComponent } from '../shared/loader.component';
import { AppStateService } from '../shared/appstate.service';
// Help: https://support.vebto.com/help-center/articles/10/13/50/getting-started
let EditorComponent = class EditorComponent extends LoaderComponent {
    constructor(state, router) {
        super();
        this.state = state;
        this.router = router;
    }
    ngOnInit() {
        if (!this.state.page) {
            alert('No photo found');
            this.router.navigate(['/home']);
        }
        $('nav, footer').hide();
    }
    ngOnDestroy() {
        $('nav, footer').show();
    }
    pixieLoadedEventHandler(loaded) {
        if (loaded) {
            this.initEditor();
        }
    }
    initEditor() {
        this.editor = new Pixie({
            watermarkText: 'Imagenes Rivera',
            image: this.state.page.imageBase64,
            ui: {
                openImageDialog: {
                    show: false
                },
                toolbar: {
                    hideOpenButton: true
                }
            },
            onLoad: () => {
            },
            onSave: (data, name) => {
                this.state.page.imageBase64 = data;
                this.router.navigate(['/my-book']);
            }
        });
    }
};
EditorComponent = tslib_1.__decorate([
    Component({
        selector: 'app-editor',
        templateUrl: './editor.component.html',
        styleUrls: ['./editor.component.scss'],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [AppStateService, Router])
], EditorComponent);
export { EditorComponent };
//# sourceMappingURL=editor.component.js.map