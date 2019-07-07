import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppStateService } from './shared/appstate.service';

declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Imagenes Rivera - KeyChain';


  constructor(private router: Router, private state: AppStateService) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          this.state.updateMDL();
          this.autoCloseSideBar();
      }
    });
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
