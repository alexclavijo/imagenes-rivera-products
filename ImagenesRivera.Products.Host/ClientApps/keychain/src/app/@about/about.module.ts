import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  exports: [AboutComponent],
  imports: [
    SharedModule
  ]
})
export class AboutModule { }
