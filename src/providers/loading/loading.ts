import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingProvider {
  private loading;
  private loadings = [];
  private isLoadingCreated = false;

  constructor(
    public http: HttpClient,
    private loadingCtrl: LoadingController
  ) {
  }

  show(type: string, text?: string) {
    if (this.loadings.indexOf(type) < 0) {
      this.loadings.push(type);

      if (!this.isLoadingCreated) {
        this.loading = this.loadingCtrl.create({
          content: text
        });
      
        this.loading.present();
        this.isLoadingCreated = true;
      }
    }
  }

  dismiss(type: string) {
    this.loadings.splice(this.loadings.indexOf(type), 1);
    if (this.loadings.length == 0) {
      this.loading.dismiss();
      this.isLoadingCreated = false;
    }
  }
}
