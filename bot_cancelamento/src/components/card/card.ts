import {Component, ElementRef, EventEmitter, Output} from '@angular/core';
import {HomePage} from "../../pages/home/home";
import {ServiceDeskPage} from "../../pages/service-desk/service-desk";
import {ChatMessage} from "../../providers/chat-service/chat-service";

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {

  text: string;
  msg: ChatMessage[] = [
    {
      "messageId":"1",
      "userId":"210000198410281948",
      "userName":"Bot",
      "toUserId":"140000198202211138",
      "userAvatar":"./assets/user.jpg",
      "time":1488349800000,
      "message":"Mais Opções",
      "status":"success",
      "type": "default"

    },
    {
      "messageId":"7",
      "userId":"210000198410281948",
      "userName":"Caio",
      "toUserId":"140000198202211138",
      "userAvatar":"./assets/user.jpg",
      "time":1491231150000,
      "message":"Menu Inicial",
      "status":"success",
      "type": "default"
    }
  ];
  @Output() clickCard = new EventEmitter<any>();
  constructor(readonly element: ElementRef) {
    console.log('Hello CardComponent Component');
    this.text = 'Hello World';
  }

  card(index){
    //this.renderer.addClass(this.element.nativeElement,'hidden');
    //this.element.nativeElement.remove();
    this.clickCard.emit(this.msg[index]);
  }
}
