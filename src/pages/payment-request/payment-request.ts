import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-request',
  templateUrl: 'payment-request.html',
})
export class PaymentRequestPage {

  public paymentDetail = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
    this.paymentDetail = this.navParams.data;
  }

  ionViewDidLoad() {
    
  }

  goPaymentDetails() {
    this.navCtrl.setRoot('PaymentDetailsPage', this.paymentDetail);
  }

  sendRequest() {

  }
}
