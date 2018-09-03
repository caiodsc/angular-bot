import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {Events} from "ionic-angular";

export class ChatMessage {
  messageId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  toUserId: string;
  time: number | string;
  message: string;
  postback?: string;
  status: string;
  type: string;
}




export class UserInfo {
  id: string;
  name?: string;
  avatar?: string;
  cpf?: string;
  birthdate?: string;
}

/*
  Generated class for the ChatServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatService {

  constructor(public http: HttpClient, private events: Events) {
    console.log('Hello ChatServiceProvider Provider');
  }

  mockNewMsg(msg) {
    const mockMsg: ChatMessage = {
      messageId: Date.now().toString(),
      userId: '01',
      userName: 'Hancock',
      userAvatar: './assets/to-user.jpg',
      toUserId: '02',
      time: Date.now(),
      message: msg.message,
      status: 'success',
      type: 'default'
    };

    setTimeout(() => {
      this.events.publish('chat:received', mockMsg, Date.now())
    }, Math.random() * 1800)
  }

  getMsgList(): Observable<ChatMessage[]> {
    const msgListUrl = './assets/mock/msg-list.json';
    return this.http.get<any>(msgListUrl)
      .pipe(map(response => response.array));
  }

  sendMsg(msg: ChatMessage) {
    return new Promise(resolve => setTimeout(() => resolve(msg), Math.random() * 1000))
      .then(() => this.mockNewMsg(msg));
  }

  getUserInfo(): Promise<UserInfo> {
    const userInfo: UserInfo = {
      id: '01',
      name: 'Luff',
      avatar: './assets/user.jpg',
      cpf: '',
      birthdate: ''
    };
    return new Promise(resolve => resolve(userInfo));
  }

}
