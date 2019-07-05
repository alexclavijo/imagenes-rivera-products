import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-js-css-loader',
  template: ''
})
export class JsCssLoaderComponent implements OnInit {

  @Input()
  public url: string;

  @Input()
  public type: string;

  @Output()
  public loadedEvent: EventEmitter<boolean> = new EventEmitter();

  private loaded = false;


  constructor(private componentElement: ElementRef) { }


  ngOnInit(): void {
    if(!this.loaded){
      this.load().then(() => {
        this.loadedEvent.emit(true);
        this.loaded = true;
        console.log(`${this.url} successfully loaded`);
     }).catch(() => {
       this.loadedEvent.emit(false);
     });
    }
 }

 private load() {
   return new Promise((resolve, reject) => {

     let element = null;

     switch (this.type) {
       case 'text/javascript':
         element = document.createElement('script');
         element.type = this.type;
         element.src = `${this.url}?v=${new Date().getTime()}`;
         element.onload = resolve;
         break;

       case 'text/css':
         element  = document.createElement('link');
         element.rel = 'stylesheet';
         element.type = this.type;
         element.href = `${this.url}?v=${new Date().getTime()}`;
         element.onload = resolve;
         break;

       default: throw new Error('Type missing or not supported');
     }

     this.componentElement.nativeElement.appendChild(element);
   });
 }

}
