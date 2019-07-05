import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JsCssLoaderComponent } from './js-css-loader/js-css-loader.component';
import { AppStateService } from './appstate.service';

@NgModule({
  declarations: [
    JsCssLoaderComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule
  ],

  exports: [
    CommonModule,
    HttpClientModule,
    JsCssLoaderComponent
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
