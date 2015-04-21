/*
  gpstest
  An app to test whether a Bluetooth receiver is picked up by HTML5 Core Location
  on iOS and Android.

  To use with iOS, just pair your Bluetooth-enabled device (Garmin GLO,
  Bad Elf GPSPro, or GPSPro+) with your device. To use with Android,
  download the Bluetooth GPS app:
  https://play.google.com/store/apps/details?id=googoo.android.btgps&hl=en
  Then pair your device and connect using the BluetoothGPS app. Click the
  "enable Mock GPS Provider" button. When you have a signal in the Bluetooth GPS app,
  open this app.

  created March 31 2015
  by Tom Igoe

*/


var app = {
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    console.log('binding events');
  },


  onDeviceReady: function() {
    app.watchLocation();
  },

  watchLocation: function () {
    function geolocationSuccess (position) {
      geolocation.innerHTML =
      'Latitude: '          + position.coords.latitude          + '<br />' +
      'Longitude: '         + position.coords.longitude         + '<br />' +
      'Altitude: '          + position.coords.altitude          + '<br />' +
      'Accuracy: '          + position.coords.accuracy          + '<br />' +
      'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br />' +
      'Heading: '           + position.coords.heading           + '<br />' +
      'Speed: '             + position.coords.speed             + '<br />' +
      'Last position: '     + new  Date(position.timestamp)     + '<br />';
    }

    function geolocationError (error) {
      alert('code: '    + error.code    + '<br />' +
      'message: ' + error.message + '<br />');
    }

    var options = {
      timeout: 10000,
      enableHighAccuracy: true
    };

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
      geolocationError,
      options);
    }
  };
