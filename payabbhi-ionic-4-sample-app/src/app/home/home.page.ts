import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  private options = {
    access_id: 'id_test_-5SZ3kc-QWCABN681ojo9yQBw0vsH-v_uxmLW0ZHjUk=',
    order_id: 'order_l1B36xW2oyuXlNc7',
    amount: 25000, 
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
  };

  label: string
  pay() {
    PayabbhiCheckout.open(this.options, this.success,this.failure);
  }

  ngOnInit() {
    this.label = `Pay ₹ ${(this.options.amount/100).toFixed(2)}`
  }

  success(data) {
    console.log(data);
  }

  failure(data) {
    console.log(data);
  }
}
