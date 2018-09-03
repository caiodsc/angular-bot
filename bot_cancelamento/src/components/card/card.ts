import { Component } from '@angular/core';
import {HomePage} from "../../pages/home/home";
import {ServiceDeskPage} from "../../pages/service-desk/service-desk";

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
  buttons: Array<any> = [
    { title: 'Minha Conta', component: '', icon: 'md-contact'},
    { title: 'Chatbot', component: HomePage, icon: 'md-chatboxes' },
    { title: 'Service Desk', component: ServiceDeskPage, icon: 'md-headset' }
  ];
  constructor() {
    console.log('Hello CardComponent Component');
    this.text = 'Hello World';
  }

}
