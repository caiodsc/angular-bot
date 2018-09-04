import {Component, ElementRef, ViewChild} from '@angular/core';
import {Content, Events, NavController} from 'ionic-angular';
import {ChatMessage, UserInfo, ChatService} from "../../providers/chat-service/chat-service";
import {AuthService, User} from "../../providers/auth-service/auth-service";
import { Ng2Cable, Broadcaster } from 'ng2-cable';
import {map} from "rxjs/operators";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: ElementRef;

  msgList: ChatMessage[] = [];
  user: UserInfo;
  toUser: UserInfo;
  editorMsg = '';
  showEmojiPicker = false;
  userObj: User;
  constructor(public navCtrl: NavController, private chatService: ChatService,
              private events: Events, private auth: AuthService, private ng2cable: Ng2Cable, private broadcaster: Broadcaster) {
    this.userObj = auth.getUserInfo();
    this.user = {
      id:'210000198410281948',
      name:'Caio',
      avatar: './assets/user.jpg'
    };
      this.toUser = {
      id:'140000198202211138',
      name:'Bot',
      avatar: './assets/to-user.jpg'
    };


    //By default event name is 'channel name'. But you can pass from backend field { action: 'MyEventName'}


  }

  ionViewDidLoad(){
    this.broadcaster.on<string>('CreateMessage').subscribe(
      message => {
        console.log(message);
      }
    );
  }
  ionViewDidEnter() {

    //get message list
    this.getMsg();
    // Subscribe to received  new message events
    this.events.subscribe('chat:received', msg => {
      this.pushNewMsg(msg);
    });

    //this.chatService.getFromServer().subscribe(
    //  res =>  this.events.publish('chat:received', res));
  }

  ionViewWillLeave() {
    // unsubscribe
    this.events.unsubscribe('chat:received');
  }

  sendMsg() {
    if (!this.editorMsg.trim()) return;

    // Mock message
    const id = Date.now().toString();
    let newMsg: ChatMessage = {
      messageId: Date.now().toString(),
      userId: this.user.id,
      userName: this.user.name,
      userAvatar: this.user.avatar,
      toUserId: this.toUser.id,
      time: Date.now(),
      message: this.editorMsg,
      status: 'pending',
      type: 'default'

    };

    this.pushNewMsg(newMsg);
    this.editorMsg = '';

    if (!this.showEmojiPicker) {
      this.focus();
    }

    this.chatService.sendMsg(newMsg)
      .then(() => {
        let index = this.getMsgIndexById(id);
        if (index !== -1) {
          this.msgList[index].status = 'success';
        }
      })
  }

  getMsg() {
    // Get mock message list
    return this.chatService
      .getMsgList()
      .subscribe(res => {
        console.log(res);
        this.msgList = res;
        this.scrollToBottom();
      });
  }

  pushNewMsg(msg: ChatMessage) {
    const userId = this.user.id,
      toUserId = this.toUser.id;
    // Verify user relationships

    if (msg.userId === userId && msg.toUserId === toUserId) {
      this.msgList.push(msg);
    } else if (msg.toUserId === userId && msg.userId === toUserId) {
      this.msgList.push(msg);
    }
    this.scrollToBottom();
  }


  getMsgIndexById(id: string) {
    return this.msgList.findIndex(e => e.messageId === id)
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }

  clickQuickReply(e){
    console.log(e);
    this.pushNewMsg(e);
  }
  clickCard(e){
    console.log(e);
    this.pushNewMsg(e);
  }

  private focus() {
    if (this.messageInput && this.messageInput.nativeElement) {
      this.messageInput.nativeElement.focus();
    }
  }

  private setTextareaScroll() {
    const textarea =this.messageInput.nativeElement;
    textarea.scrollTop = textarea.scrollHeight;
  }

}
