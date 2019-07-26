import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-imageschooser',
  templateUrl: './images-chooser.component.html',
  styleUrls: ['./images-chooser.component.scss']
})
export class ImagesChooserComponent implements OnInit {

  //public images64 = [];
  public imageFiles = [];

  @Output()
  public imageAddedToBookEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {      
        for (const file of event.target.files) {
          this.imageFiles.push(file);
        }
        
        // const filesAmount = event.target.files.length;
        // for (let i = 0; i < filesAmount; i++) {
        //   const reader = new FileReader();
        //   reader.onload = (event: any) => {
        //       this.images64.push(event.target.result); 
            
        //   };
        //   reader.readAsDataURL(event.target.files[i]);
        // }
    }
  }

  imageRemovedFromListHandled(index: number) {
    this.imageFiles.splice(index, 1);
  }
}
