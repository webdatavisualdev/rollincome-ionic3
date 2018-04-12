import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { LoadingProvider } from '../../providers/loading/loading';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  form: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private auth: AuthProvider,
    private loading: LoadingProvider,
  ) {
    this.form = formBuilder.group({
      first_name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      gender: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
    this.loading.show('signup');
    this.auth.signup(this.form.value).subscribe((res: any) => {
      if (res.email_created == 'yes') {
        this.navCtrl.push('CheckEmailPage', {email: this.form.value.email});
      }
      this.loading.dismiss('signup');
    });
  }

  login() {
    this.navCtrl.setRoot('LoginPage');
  }
}
