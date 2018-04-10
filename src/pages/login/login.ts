import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { LoadingProvider } from '../../providers/loading/loading';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public auth: AuthProvider,
    private loading: LoadingProvider
  ) {
    this.form = formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
    });

    this.auth.silentLogin().then(res => {
      this.navCtrl.setRoot('TabsPage');
    }).catch(err => {
      
    });
  }

  ionViewDidLoad() {
    
  }

  login() {
    this.loading.show('login');
    this.auth.login(this.form.value).subscribe((res: any) => {
      if (res.email_validated === 'yes') {
        this.auth.isLoggedIn.next(true);
        localStorage.setItem('token', res.token);
        localStorage.setItem('email', this.form.value.email);
        this.navCtrl.setRoot('TabsPage');
      }
      this.loading.dismiss('login');
    });
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  forgotPassword() {
    this.navCtrl.push('ForgotPasswordPage');
  }
}
