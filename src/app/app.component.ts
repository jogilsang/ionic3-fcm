import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FCM } from '@ionic-native/fcm';
// import { Storage } from '@ionic/storage'; //Import Storage

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  initFCM(fcm) {
    console.log("initFCM");
    
    fcm.subscribeToTopic('marketing');

    fcm.getToken().then(token => {
      console.log(JSON.stringify(token));
      // this.storage.set('token', token);
      
      //backend.registerToken(token);
    });
    
    fcm.onNotification().subscribe(data => {
      if(data.wasTapped){
        console.log("Received in background");
        // this.storage.set('data', JSON.stringify(data));
      } else {
        console.log("Received in foreground");
        // this.storage.set('data', JSON.stringify(data));
      };
    });
    
    // fcm.onTokenRefresh().subscribe(token => {
    //   console.log(token);
    // });
    
    // fcm.unsubscribeFromTopic('marketing');

  }
  rootPage:any = HomePage;

  constructor(fcm :FCM, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initFCM(fcm);
    });
  }
}

