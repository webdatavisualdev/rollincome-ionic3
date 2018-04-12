import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckEmailPage } from './check-email';

@NgModule({
  declarations: [
    CheckEmailPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckEmailPage),
  ],
})
export class CheckEmailPageModule {}
