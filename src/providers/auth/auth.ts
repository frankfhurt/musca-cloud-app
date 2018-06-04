import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Auth {

  static users: Map<String, String> = new Map<String, String>()

  user: {
    login,
    password
  }

  constructor() {
    console.log('Hello AuthProvider Provider');
    Auth.users.set('franklyn', '1234')
  }

  login(user) {
    return new Promise(resolve => {
      setTimeout(() => {

        if (Auth.users.has(user.login)) {
          if (Auth.users.get(user.login))
            resolve(true);
        }

        resolve(false);
      }, 1000);
    })
  }
}