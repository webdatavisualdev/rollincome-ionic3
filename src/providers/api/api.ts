import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverUrl } from '../config';

@Injectable()
export class ApiProvider {
  private token = '';

  constructor(public http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  getAccount() {
    const url = serverUrl + 'user/account';
    let params = new HttpParams();
    params = params.set('token', this.token);
    return this.http.get(url, {params: params});
  }

  getTransactions() {
    const url = serverUrl + 'user/transactions';
    let params = new HttpParams();
    params = params.set('token', this.token);
    return this.http.get(url, {params: params});
  }

  getChatrooms(name?: string) {
    const url = serverUrl + 'user/rooms';
    let params = new HttpParams();
    params = params.set('token', this.token);
    if (name) {
      params = params.set('name', name);
    }
    return this.http.get(url, {params: params});
  }

  getMessages(receiver_id: string) {
    const url = serverUrl + 'group/messages';
    let params = new HttpParams();
    params = params.set('token', this.token);
    params = params.set('receiver_id', receiver_id);
    return this.http.get(url, {params: params});
  }

  getPayments() {
    const url = serverUrl + 'user/obligations';
    let params = new HttpParams();
    params = params.set('token', this.token);
    return this.http.get(url, {params: params});
  }

  getRequests() {
    const url = serverUrl + 'user/requests';
    let params = new HttpParams();
    params = params.set('token', this.token);
    return this.http.get(url, {params: params});
  }
}
