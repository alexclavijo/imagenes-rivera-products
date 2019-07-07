import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-imageschooser',
  templateUrl: './images-chooser.component.html',
  styleUrls: ['./images-chooser.component.scss']
})
export class ImagesChooserComponent implements OnInit {

  public images = [];

  constructor() { }

  ngOnInit() {
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        const filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                const reader = new FileReader();
                reader.onload = (event: any) => {
                   this.images.push(event.target.result); 
                };
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

}
