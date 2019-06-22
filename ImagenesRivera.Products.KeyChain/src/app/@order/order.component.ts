import { IUser } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest, IPayer } from 'ngx-paypal';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public user: IPayer = {};

 public payPalConfig: IPayPalConfig;

  ngOnInit() {
     this.initPaypalCheckout();
  }

  private initPaypalCheckout(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest> {
        intent: 'CAPTURE',
        //payer: this.user,
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: '9.99'
              }
            }
          },
          items: [{
            description: '',
            name: 'Key Chain',
            quantity: '1',
            category: 'PHYSICAL_GOODS',
            unit_amount: {
              currency_code: 'USD',
              value: '9.99'
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'checkout',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onShippingChange: (data, actions) => {

      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

}
