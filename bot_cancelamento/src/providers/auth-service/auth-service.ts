import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class User {
  cpf: string;
  birthdate: string;
  avatar: string;
  name: string;
  email: string;

  constructor(cpf: string, birthdate: string, avatar: string, name: string, email: string) {
    this.cpf = cpf;
    this.birthdate = birthdate;
    this.avatar = avatar;
    this.name = name;
    this.email = email;
  }
}


@Injectable()
export class AuthService {
  currentUser: User;

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  public login(credentials) {
    if (credentials.cpf === null || credentials.birthdate === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {

        // At this point make a request to your backend to make a real check!
        this.http.post('http://40a039b0.ngrok.io/login', "cpf=" + credentials.cpf + "&" + "birthdate=" + credentials.birthdate, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
          .pipe(map(res => res)) // or any other operator)
          .subscribe(res => {
            if (res["EX_STATUS"] == "00"){
              this.currentUser = new User(res["EX_CPF"],res["EX_BIRTHDATE"],res["EX_AVATAR"],res["EX_NAME"],res["EX_SMTP_ADDR"]);
              observer.next(true);
            } else {
              observer.next(false);
            }
            observer.complete();
          });
        //console.log(access);
        // console.log(access);
        //let access = (credentials.password === "pass" && credentials.email === "email");
        //this.currentUser = new User;//('Simon', 'saimon@devdactic.com');
        //observer.next(access);
        //observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }



}
