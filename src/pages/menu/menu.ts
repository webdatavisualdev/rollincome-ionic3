import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  public menuItems = [
    {
      text: 'Group',
      page: 'GroupPage',
      color: '#4388cc'
    },
    {
      text: 'My Profile',
      page: 'ProfilePage',
      color: '#ffcc33'
    },
    {
      text: 'Account',
      page: 'AccountPage',
      color: '#33cc00'
    },
    {
      text: 'Chat',
      page: 'ChatPage',
      color: '#cc0000'
    },
    {
      text: 'Request',
      page: 'RequestPage',
      color: '#993399'
    },
    {
      text: 'Payment',
      page: 'PaymentPage',
      color: '#646464'
    },
  ];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private app: App
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  goPage(page) {
    this.navCtrl.setRoot(page);
  }

  logout() {
    this.authProvider.logout();
    this.app.getRootNav().setRoot('LoginPage');
  }
}
