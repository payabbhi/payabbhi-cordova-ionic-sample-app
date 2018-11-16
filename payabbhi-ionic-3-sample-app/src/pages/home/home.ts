import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options = {
    access_id: '<ACCESS_ID>',
    order_id: '<ORDER_ID>',
    amount: 100, 
    name: 'Merchant Name',
    prefill: {
        name: 'Bruce Wayne',
        email: 'bruce@wayneinc.com',
        contact: '999999999999'
    },
    notes: {
        merchant_order_id: 'ordRefNo123456'
    },
    theme: {
          "color": "#4E597C",
    }
  }
  payButtonLabel: string;

  constructor(public navCtrl: NavController) {
    this.payButtonLabel = "Pay ₹ " + (this.options.amount/100).toFixed(2);
  }

  pay(event) {
    PayabbhiCheckout.open(this.options, this.success,this.failure);
  }

  success(data) {
    console.log(data);
  }

  failure(data) {
    console.log(data);
  }
}
