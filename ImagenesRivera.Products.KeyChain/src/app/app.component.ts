import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;
declare var componentHandler: any;

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
      if (event instanceof NavigationEnd) {
          this.updateMDL();
          this.autoCloseSideBar();
      }
    });
  }

  // Metrial Design Lite
  private updateMDL(): void {
    componentHandler.upgradeDom();
  }

  private autoCloseSideBar(): void {
    setTimeout(() => {
      const $menuBtn = $('#collopse-button');
      if($menuBtn.hasClass('active')) {
        $('#collopse-button').trigger('click');
      }
    }, 200);
  }

}
