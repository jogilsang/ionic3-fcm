import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FCM } from '@ionic-native/fcm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  token: string = 'test';
  data: string = 'test';

  storage: any;
  fcm : any;


  test(){
    this.fcm.onTokenRefresh().subscribe(token => {
      console.log(token);
    });
  }

  constructor(fcm : FCM, storage: Storage, public navCtrl: NavController) {
    this.fcm = fcm;
    this.storage = storage;

    this.storage.get('token').then((val) => {
        console.log(val);
        this.token = val;
    });
    this.data = this.storage.get('data').then((val) => {
      console.log(val);
      this.data = val;
    });

  }

}
