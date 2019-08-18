import { FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JsCssLoaderComponent } from './js-css-loader/js-css-loader.component';
import { AppStateService } from './appstate.service';
import { LoaderComponent } from './loading/loader.component';

@NgModule({
  declarations: [
    JsCssLoaderComponent, 
    LoaderComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],

  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    JsCssLoaderComponent,
    LoaderComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AppStateService]
    };
  }
}
