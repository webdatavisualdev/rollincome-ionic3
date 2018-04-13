import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { LoadingProvider } from '../../providers/loading/loading';

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
  public requests = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api: ApiProvider,
    public loading: LoadingProvider,
  ) {
    this.loading.show('getRequests');
    this.api.getRequests().subscribe((res: any) => {
      console.log(res);
      this.requests = res.data;
      this.loading.dismiss('getRequests');
    });
  }

  ionViewDidLoad() {
    
  }

  getItems(e) {

  }

  onCancel(e) {

  }

  goRequestDetails(request) {
    this.navCtrl.setRoot('RequestDetailsPage', request);
  }
}
