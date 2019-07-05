import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  exports: [ContactComponent],
  imports: [
    SharedModule
  ]
})
export class ContactModule { }
