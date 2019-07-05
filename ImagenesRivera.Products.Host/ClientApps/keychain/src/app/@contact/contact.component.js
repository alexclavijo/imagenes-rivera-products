import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ContactComponent = class ContactComponent {
    constructor() { }
    ngAfterViewInit() {
        google.maps.event.addDomListener(window, 'load', this.initialize_map());
    }
    initialize_map() {
        if ($('#map').length) {
            const myLatLng = new google.maps.LatLng(25.730874, -80.310543);
            const mapOptions = {
                zoom: 17,
                center: myLatLng,
                scrollwheel: false,
                panControl: false,
                zoomControl: true,
                scaleControl: false,
                mapTypeControl: false,
                streetViewControl: false
            };
            this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
            const marker = new google.maps.Marker({
                position: myLatLng,
                map: this.map,
                title: 'Imagenes Rivera',
                icon: '/assets/template/images/map-locator.png'
            });
        }
    }
};
ContactComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map