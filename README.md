# gpstest

A test of HTML5 core services connected to GPS 

Developed for iOS and Android in Cordova

An app to test whether a Bluetooth receiver is picked up by HTML5 Core Location on iOS and Android.

The www folder is the only part you really need for the Cordova project. If you have problems, just create a new Cordova project, then replace the project's www directory with this www directory.

To use with iOS, just pair your Bluetooth-enabled device (Garmin GLO, Bad Elf GPSPro, or GPSPro+) with your device.

To use with Android, download the [Bluetooth GPS app](https://play.google.com/store/apps/details?id=googoo.android.btgps&hl=en) 
Then pair your device and connect using the BluetoothGPS app. Click the "enable Mock GPS Provider" button. 
When you have a signal in the Bluetooth GPS app, open this app.
