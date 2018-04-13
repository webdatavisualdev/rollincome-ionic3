import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-request-details',
  templateUrl: 'request-details.html',
})
export class RequestDetailsPage {

  public request = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.request = this.navParams.data;
  }

  ionViewDidLoad() {
    
  }

  rejectRequest() {

  }

  acceptRequest() {

  }

  goRequestList() {
    this.navCtrl.setRoot('RequestPage');
  }
}
