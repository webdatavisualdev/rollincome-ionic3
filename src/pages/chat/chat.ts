import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { LoadingProvider } from '../../providers/loading/loading';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  public rooms = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private api: ApiProvider,
    private loading: LoadingProvider,
  ) {
    this.loading.show('getChatrooms');
    this.api.getChatrooms().subscribe((res: any) => {
      this.rooms = res.data;
      this.loading.dismiss('getChatrooms');
    });
  }

  ionViewDidLoad() {
    
  }

  getItems(event) {

  }

  onCancel(event) {
    
  }

  goMessages(id) {
    this.navCtrl.setRoot('ChatMessagesPage', {id: id});
  }
}
