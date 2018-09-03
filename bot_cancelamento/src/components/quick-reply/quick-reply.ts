import {Component, ElementRef, EventEmitter, Output, Renderer2} from '@angular/core';
import { ChatMessage, QuickRepliesTemplate, CardTemplate} from "../../providers/chat-service/chat-service";

/**
 * Generated class for the QuickReplyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'quick-reply',
  templateUrl: 'quick-reply.html'
})
export class QuickReplyComponent {

  text: string;
  msg: ChatMessage[] = [
    {
      "messageId":"1",
      "userId":"210000198410281948",
      "userName":"Bot",
      "toUserId":"140000198202211138",
      "userAvatar":"./assets/user.jpg",
      "time":1488349800000,
      "message":"Ocupado",
      "status":"success",
      "type": "default"
      //"quickReplies": new Array<QuickRepliesTemplate>(),
      //"card": new CardTemplate()
    },
    {
      "messageId":"7",
      "userId":"210000198410281948",
      "userName":"Caio",
      "toUserId":"140000198202211138",
      "userAvatar":"./assets/user.jpg",
      "time":1491231150000,
      "message":"Aprovar",
      "status":"success",
      "type": "default"
      //"quickReplies": new Array<QuickRepliesTemplate>(),
      //"card": new CardTemplate()
    }
  ];
  @Output() clickQuickReply = new EventEmitter<any>();
  constructor(readonly element: ElementRef, private renderer: Renderer2) {
    console.log('Hello QuickReplyComponent Component');
    this.text = 'Hello World';
  }

  quickReply(index){
    //this.renderer.addClass(this.element.nativeElement,'hidden');
    this.element.nativeElement.remove();
    this.clickQuickReply.emit(this.msg[index]);
  }
}

