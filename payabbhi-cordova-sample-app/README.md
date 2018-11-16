# Payabbhi Cordova Sample App

This is a reference app for enabling Payments acceptance in your 
Cordova App using [Payabbhi Cordova Plugin](https://payabbhi.com/docs/mobile-checkout/cordova-ionic/).

For Integration guide, refer to [Mobile Checkout - Cordova / Ionic](https://payabbhi.com/docs/mobile-checkout/cordova-ionic/).

### Running the Sample app

Make sure you have signed up for your [Payabbhi Account](https://payabbhi.com/docs/account) and downloaded the [API keys](https://payabbhi.com/docs/account/#api-keys) from the [Portal](https://payabbhi.com/portal).

- Clone the Cordova Sample App repository.

- Add desired platform. [For android, make sure `minSdkVersion` is set to 19]
```bash
$ cordova platform add browser
$ cordova platform add android
$ cordova platform add ios
```

- Install Payabbhi Cordova Plugin
```bash
$ cordova plugin add cordova-plugin-payabbhi --save
```


- Replace `<YOUR_ACCESS_ID>` with your `Access ID` in `www/js/index.js`

- Add logic to get `order_id` from your Mobile Backend (server-side code) in `www/js/index.js`

    > TIP: An alternative to having a Mobile Backend for running the sample App is:
    > 1. Generate a unique order_id using curl
    > 2. Copy/paste the generated order_id in `www/js/index.js`
    > 3. Once a successful test transaction is completed for a particular order, repeat the above steps

    ```
    curl https://payabbhi.com/api/v1/orders \
      -u access_id:secret_key \
      -d amount=100 \
      -d merchant_order_id=ordRefNo123456 \
      -d currency=INR
    ```

- Pass suitable values in Checkout options in `www/js/index.js` e.g. `orderAmount` as per Order.amount
- Now start the Sample app in emulator
```
$ cordova emulate browser  # for browser
$ cordova emulate android  # for Android Emulator
$ cordova emulate ios      # for iOS Emulator
```

## Content Security Policy

Add the following meta tag in `www/index.html` to allow payabbhi.com domain for browser platform.

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self' https://*.payabbhi.com data: https://payabbhi.com gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' https://payabbhi.com data: content:;">
```
