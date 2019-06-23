import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, AfterViewInit, OnDestroy } from '@angular/core';
import { IImageEditorSettings } from './editor.settings';
import { LoaderComponent } from '../shared/loader.component';
import { AppStateService } from '../shared/appstate.service';

declare var $: any;
declare var Pixie: any;

// Help: https://support.vebto.com/help-center/articles/10/13/50/getting-started
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent extends LoaderComponent implements OnInit, OnDestroy  {

  private editor: any;

  constructor(private state: AppStateService, private router: Router) {
    super();
  }


  ngOnInit(): void {
    if(!this.state.page) {
      alert('No photo found');
      this.router.navigate(['/home']);
    }

    $('nav, footer').hide();
  }

  ngOnDestroy(): void {
    $('nav, footer').show();
  }

  public pixieLoadedEventHandler(loaded: boolean){
    if (loaded) {
      this.initEditor();
    }
  }

  private initEditor(): void{
    this.editor = new Pixie({
      watermarkText: 'Imagenes Rivera',
      image: this.state.page.imageBase64,
      ui: {
        openImageDialog: {
          show: false
        },
        toolbar: {
          hideOpenButton: true
        }
      },
      onLoad: () => {

      },
      onSave: (data, name) => {
        this.state.page.imageBase64 = data;
        this.router.navigate(['/my-book']);
      }
    } as IImageEditorSettings);
  }

}
