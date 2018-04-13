import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { LoadingProvider } from '../../providers/loading/loading';
import { ChatProvider } from '../../providers/chat/chat';

@IonicPage()
@Component({
  selector: 'page-chat-messages',
  templateUrl: 'chat-messages.html',
})
export class ChatMessagesPage {
  public message = '';
  public messages = [];
  public receiver_id = '';
  public email = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private api: ApiProvider,
    private loading: LoadingProvider,
    private chat: ChatProvider,
  ) {
    this.receiver_id = this.navParams.data.id;
    this.email = localStorage.getItem('email');

    this.loading.show('getMessages');
    this.api.getMessages(this.receiver_id).subscribe((res: any) => {
      this.messages = res.data.reverse();
      console.log(this.messages)
      this.loading.dismiss('getMessages');
    });

    this.chat.message.subscribe((res: any) => {
      this.messages.push(JSON.parse(res.json_msg)[0]);
    });
  }

  ionViewDidLoad() {
  }

  goRoomList() {
    this.navCtrl.setRoot('ChatPage');
  }

  send() {
    if (this.message !== '') {
      this.chat.sendMessage({
        message: this.message,
        receiver_id: this.receiver_id,
        token: localStorage.getItem('token'),
      });
      this.message = '';
    }
  }
}
