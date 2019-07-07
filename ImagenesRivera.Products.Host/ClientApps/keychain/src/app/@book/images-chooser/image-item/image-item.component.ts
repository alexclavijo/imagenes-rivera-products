import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { AppStateService } from '../../../shared/appstate.service';

@Component({
  selector: 'app-book-imageitem',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements AfterViewInit {
  @Input()
  public index: number;

  @Input()
  public image: any;

  constructor(private state: AppStateService) { }

  ngAfterViewInit(): void {
    this.state.updateMDL();
  }

}
