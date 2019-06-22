import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './order.service';
import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPayPalModule } from 'ngx-paypal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrderComponent
  ],
  exports: [OrderComponent],
  imports: [
    SharedModule,
    NgxPayPalModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[OrderService]
})
export class OrderModule { }
