import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Login, Signup } from '../models';
import * as sha512 from 'sha512';

const serverUrl = 'https://www.rollincome.com/api/';

@Injectable()
export class AuthProvider {
  public isLoggedIn = new Subject();

  constructor(public http: HttpClient) {
    
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.isLoggedIn.next(false);
  }

  silentLogin() {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem('token') && localStorage.getItem('email')) {
        this.isLoggedIn.next(true);
        resolve(true);
      } else {
        this.isLoggedIn.next(false);
        reject(false);
      }
    });
  }

  login(data: Login) {
    const url = serverUrl + 'login';
    let params: HttpParams = new HttpParams();
    params = params.set('email', data.email);
    params = params.set('password', sha512(data.password).toString('hex'));
    return this.http.get(url, {params: params});
  }

  signup(data: Signup) {
    const url = serverUrl + 'users/add';
    let params: HttpParams = new HttpParams();
    params = params.set('email', data.email);
    params = params.set('first_name', data.first_name);
    params = params.set('password', sha512(data.password).toString('hex'));
    params = params.set('gender', data.gender);
    return this.http.get(url, {params: params});
  }
}
