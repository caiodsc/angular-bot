import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServiceDeskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-desk',
  templateUrl: 'service-desk.html',
})
export class ServiceDeskPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  todo = {
    title: '',
    description: ''
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceDeskPage');
  }
  logForm(form) {
    console.log(form.value)
  }
}
