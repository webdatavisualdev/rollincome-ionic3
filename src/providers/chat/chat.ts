import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { chatUrl } from '../config';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ChatProvider {
  private socket = io(chatUrl);
  public message = new Subject();

  constructor(public http: HttpClient) {
    this.socket.on('connect', res => {
      this.socket.emit('user_connected', {token: localStorage.getItem('token')});
    });

    this.socket.on('user_connected', function(msg) {
    });

    this.socket.on('message', (data) => {
      this.message.next(data);
    }); 
  }

  sendMessage(message){
    this.socket.emit('message', message);
  }
}
