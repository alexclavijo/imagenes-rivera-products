import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Imagenes Rivera - KeyChain';


  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        setTimeout(() => {
          const $menuBtn = $('#collopse-button');
          if($menuBtn.hasClass('active')) {
            $('#collopse-button').trigger('click');
          }
        }, 200);
      }
    });
  }

}
