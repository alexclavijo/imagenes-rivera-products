import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AppStateService } from '../../../shared/appstate.service';

@Component({
  selector: 'app-book-imageitem',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements  OnChanges {
  
  @Input()
  public index: number;

  @Input()
  public imageFile: any;

  @Output()
  public imageAddedToBookEvent = new EventEmitter();

  @Output()
  public imageRemovedEvent = new EventEmitter();

  public image64: string;

  constructor(private state: AppStateService) { }
  

  ngOnChanges(changes: SimpleChanges) {
    if(changes.imageFile && changes.imageFile.currentValue) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.image64 = event.target.result; 
        this.state.updateMDL();
      };
      reader.readAsDataURL(changes.imageFile.currentValue);
      
    }
  }  

  addToBookClick() {
    this.imageAddedToBookEvent.emit(this.imageFile);
  }

  removeFromListClick() {
    this.imageRemovedEvent.emit(this.index);
  }

}
