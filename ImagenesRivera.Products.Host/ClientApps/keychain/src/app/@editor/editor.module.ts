import { RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditorModule { }
