# Payabbhi Ionic 4 Sample App

This is a reference app for enabling Payments acceptance in your 
**Ionic 4 App** using [Payabbhi Cordova Plugin](https://payabbhi.com/docs/mobile-checkout/cordova-ionic/).

For Integration guide, refer to [Mobile Checkout - Cordova / Ionic](https://payabbhi.com/docs/mobile-checkout/cordova-ionic/).

### Running the Sample app

Make sure you have signed up for your [Payabbhi Account](https://payabbhi.com/docs/account) and downloaded the [API keys](https://payabbhi.com/docs/account/#api-keys) from the [Portal](https://payabbhi.com/portal).

- Clone the Ionic Sample App repository.

- Add desired platform. [For android, make sure `minSdkVersion` is set to 19]
```bash
$ ionic cordova platform add browser
$ ionic cordova platform add android
$ ionic cordova platform add ios
```

- Install Payabbhi Cordova Plugin
```bash
$ ionic cordova plugin add cordova-plugin-payabbhi --save
```


- Replace `<YOUR_ACCESS_ID>` with your `Access ID` in `src/app/home/home.page.ts`

- Add logic to get `order_id` from your Mobile Backend (server-side code) in `src/app/home/home.page.ts`

    > TIP: An alternative to having a Mobile Backend for running the sample App is:
    > 1. Generate a unique order_id using curl
    > 2. Copy/paste the generated order_id in `src/app/home/home.page.ts`
    > 3. Once a successful test transaction is completed for a particular order, repeat the above steps

    ```
    curl https://payabbhi.com/api/v1/orders \
      -u access_id:secret_key \
      -d amount=100 \
      -d merchant_order_id=ordRefNo123456 \
      -d currency=INR
    ```

- Pass suitable values in Checkout options in `src/app/home/home.page.ts` e.g. `orderAmount` as per Order.amount
- Now start the Sample app in emulator
```
$ ionic cordova emulate browser  # for browser
$ ionic cordova emulate android  # for Android Emulator
$ ionic cordova emulate ios      # for iOS Emulator
```
