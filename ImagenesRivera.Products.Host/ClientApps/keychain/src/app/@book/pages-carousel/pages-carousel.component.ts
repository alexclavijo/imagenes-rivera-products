import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-pagescarousel',
  templateUrl: './pages-carousel.component.html',
  styleUrls: ['./pages-carousel.component.scss']
})
export class PagesCarouselComponent implements OnInit {

  public layoutSelected = 1;

  constructor() { }

  ngOnInit() {
  }

}
