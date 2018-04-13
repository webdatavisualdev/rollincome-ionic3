import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-payment-details',
  templateUrl: 'payment-details.html',
})
export class PaymentDetailsPage {
  public paymentDetail = {};
  public paymentMethod = 'By Hand';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
    this.paymentDetail = this.navParams.data;
  }

  ionViewDidLoad() {
    
  }

  goRoomList() {
    this.navCtrl.setRoot('PaymentPage');
  }

  goPaymentRequest() {
    this.navCtrl.setRoot('PaymentRequestPage', {
      ...this.paymentDetail,
      paymentMethod: this.paymentMethod
    });
  }
}
