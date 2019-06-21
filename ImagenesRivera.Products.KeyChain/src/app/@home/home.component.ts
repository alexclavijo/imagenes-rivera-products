import { AppStateService } from './../shared/appstate.service';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoaderComponent } from '../shared/loader.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent extends LoaderComponent implements OnInit {

  constructor(private state: AppStateService) {
    super();
  }

  ngOnInit() {
  }

}
