import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tabRoots = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider,
  ) {
    this.tabRoots = [
      {
        page: 'AccountPage',
        title: 'Account',
        icon: 'home',
      },
      {
        page: 'ChatPage',
        title: 'Chat',
        icon: 'information-circle',
      },
      {
        page: 'RequestPage',
        title: 'Request',
        icon: 'contacts',
      },
      {
        page: 'PaymentPage',
        title: 'Payment',
        icon: 'home',
      },
      {
        page: 'MenuPage',
        title: 'More ...',
        icon: 'home',
      },
    ];
  }

  ionViewDidLoad() {

  }

}
