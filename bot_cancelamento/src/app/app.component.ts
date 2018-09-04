import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {ServiceDeskPage} from "../pages/service-desk/service-desk";
import {LoginPage} from "../pages/login/login";
import {Ng2Cable} from "ng2-cable";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private ng2cable: Ng2Cable) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Minha Conta', component: '', icon: 'md-contact'},
      { title: 'Chatbot', component: HomePage, icon: 'md-chatboxes' },
      { title: 'Service Desk', component: ServiceDeskPage, icon: 'md-headset' }
  ];
    this.ng2cable.subscribe('http://40a039b0.ngrok.io/cable', 'ChatChannel', { room: 'chat' });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  logout() {
    this.nav.setRoot(LoginPage);
  }
}
