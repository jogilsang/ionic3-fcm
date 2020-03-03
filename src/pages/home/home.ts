import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  token : string = '';
  data : string = '';

  constructor(public navCtrl: NavController) {

    // this.storage = storage;

    // this.token = this.storage.get('token');
    // this.data = this.storage.get('data');

  }

}
