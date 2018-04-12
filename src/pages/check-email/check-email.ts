import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoadingProvider } from '../../providers/loading/loading';

@IonicPage()
@Component({
  selector: 'page-check-email',
  templateUrl: 'check-email.html',
})
export class CheckEmailPage {
  public code = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthProvider,
    public loading: LoadingProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckEmailPage');
  }

  validate() {
    this.loading.show('validate');
    this.auth.validate({
      email: this.navParams.data.email,
      validation_code: this.code
    }).subscribe((res: any) => {
      this.loading.dismiss('validate');
      if (res.email_validated === 'yes') {
        this.navCtrl.setRoot('LoginPage');
      }
    });
  }
}
