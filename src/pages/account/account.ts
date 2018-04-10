import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { LoadingProvider } from '../../providers/loading/loading';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  private accountInfo = {};
  private transactions = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private api: ApiProvider,
    private loading: LoadingProvider,
  ) {

    this.loading.show('getAccount');
    this.api.getAccount().subscribe((res: any) => {
      if (res.data) {
        this.accountInfo = res.data[0];
      }
      this.loading.dismiss('getAccount');
    });

    this.loading.show('getTransactions');
    this.api.getTransactions().subscribe((res: any) => {
      console.log(res);
      if (res.data) {
        this.transactions = res.data;
      }
      this.loading.dismiss('getTransactions');
    });
  }

  ionViewDidLoad() {
    
  }

}
