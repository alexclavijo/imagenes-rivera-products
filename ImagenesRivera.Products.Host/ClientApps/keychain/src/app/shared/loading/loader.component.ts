import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { AppStateService } from '../appstate.service';



@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

    public isBusy: boolean;

    constructor(private state: AppStateService) { }

    ngOnInit() {
        this.state.appBusy.subscribe((busy: boolean) => {
            this.isBusy = busy;
            this.state.updateMDL();
        });
    }
}
