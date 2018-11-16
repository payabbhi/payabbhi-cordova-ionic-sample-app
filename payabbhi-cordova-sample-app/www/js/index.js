/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var options = {
    access_id: '<YOUR_ACCESS_ID>',
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
};

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('payabbhi-demo');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var payButton = document.getElementById('btn-payabbhi');
        payButton.innerText = "Pay ₹ " + (options.amount/100).toFixed(2);
        payButton.addEventListener('click', this.onPay.bind(this), false)
    },

    onPay: function() {
        console.log('button clicked ...');
        PayabbhiCheckout.open(options, this.onSuccess.bind(this), this.onError.bind(this));
            event.preventDefault();
    }, 

    onSuccess: function(response) {
        console.log(response);
    }, 

    onError: function(error) {
        console.log(error.message);
    }
};

app.initialize();
