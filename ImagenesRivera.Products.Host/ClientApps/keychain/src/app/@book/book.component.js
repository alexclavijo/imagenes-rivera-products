import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { AppStateService } from './../shared/appstate.service';
import { Component } from '@angular/core';
let BookComponent = class BookComponent {
    constructor(state, router) {
        this.state = state;
        this.router = router;
    }
    ngOnInit() {
        if (!this.state.book) {
            this.state.book = {
                title: 'test',
                skin: 'skin1',
                pages: [
                    { id: new Date().getTime(), index: 1, defaultUrl: '/assets/template/images/team/member-01.jpg', text: 'page1' },
                    { id: new Date().getTime(), index: 2, defaultUrl: '/assets/template/images/team/member-02.jpg', text: 'page2' },
                    { id: new Date().getTime(), index: 3, defaultUrl: '/assets/template/images/team/member-03.jpg', text: 'page3' },
                    { id: new Date().getTime(), index: 4, defaultUrl: '/assets/template/images/team/member-03.jpg', text: 'page3' }
                ]
            };
        }
    }
    ngAfterViewInit() {
        this.$flipBook = $('.flipbook');
        const options = {
            autoCenter: true,
            when: {
                turning: (e, page, pageObj) => { },
                turned: (event, page, pageObj) => { },
                start: (event, page, corner) => { },
                end: (e, pageObj) => { },
                missing: (e, pageObj) => { }
            }
        };
        this.$flipBook.turn(options);
    }
    openImageEditor(page, cropper) {
        cropper.crop();
        this.state.page = page;
        this.router.navigate(['/image-editor']);
    }
    playClick() {
    }
    nextClick() {
        this.$flipBook.turn('next');
    }
    prevClick() {
        this.$flipBook.turn('previous');
    }
    firstClick() {
        this.$flipBook.turn('page', 1);
    }
    lastClick() {
        this.$flipBook.turn('page', this.state.book.pages.length + 4);
    }
    fileChangeEvent(page, event) {
        const file = event.target.files[0];
        const myReader = new FileReader();
        myReader.onloadend = (e) => {
            page.imageBase64 = myReader.result.toString();
        };
        myReader.readAsDataURL(file);
    }
    imageCropped(page, event) {
        page.imageBase64 = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    browseFile(page) {
        $('#chosser-' + page.index).click();
    }
};
BookComponent = tslib_1.__decorate([
    Component({
        selector: 'app-book',
        templateUrl: './book.component.html',
        styleUrls: ['./book.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [AppStateService, Router])
], BookComponent);
export { BookComponent };
//# sourceMappingURL=book.component.js.map