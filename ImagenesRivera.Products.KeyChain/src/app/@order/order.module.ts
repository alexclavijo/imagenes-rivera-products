import { OrderService } from './order.service';
import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPayPalModule } from 'ngx-paypal';

import { PaymentComponent } from './payment/payment.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrderComponent,
    PaymentComponent
  ],
  exports: [OrderComponent],
  imports: [
    SharedModule,
    NgxPayPalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[OrderService]
})
export class OrderModule { }
