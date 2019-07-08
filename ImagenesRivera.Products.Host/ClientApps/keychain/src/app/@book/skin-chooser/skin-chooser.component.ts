import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-skinchooser',
  templateUrl: './skin-chooser.component.html',
  styleUrls: ['./skin-chooser.component.scss']
})
export class SkinChooserComponent implements OnInit {

  public skins = [
    'Skin 1',
    'Skin 2',
    'Skin 3',
    'Skin 4',
    'Skin 5'
  ];

  public skinSelected = 1;

  constructor() { }

  ngOnInit() {
  }

}
