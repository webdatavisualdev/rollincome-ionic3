import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { LoadingProvider } from '../../providers/loading/loading';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  public payments = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api: ApiProvider,
    public loading: LoadingProvider,
  ) {
    this.loading.show('getPayments');
    this.api.getPayments().subscribe((res: any) => {
      console.log(res);
      this.payments = res.data;
      this.loading.dismiss('getPayments');
    });
  }

  ionViewDidLoad() {
    
  }

  getItems(e) {

  }

  onCancel(e) {

  }

  goPaymentDetails(payment) {
    this.navCtrl.setRoot('PaymentDetailsPage', payment);
  }
}
