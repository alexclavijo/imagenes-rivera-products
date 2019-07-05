import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var google: any;
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {

  private map: any;

  constructor() { }

  ngAfterViewInit(): void {
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
}
