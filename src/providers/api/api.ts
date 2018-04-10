import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const serverUrl = 'https://www.rollincome.com/api/';

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
}
