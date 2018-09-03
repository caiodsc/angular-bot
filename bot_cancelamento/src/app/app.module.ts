import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceDeskPage } from "../pages/service-desk/service-desk";
import { ChatService } from '../providers/chat-service/chat-service';
import {HttpClientModule} from "@angular/common/http";
import {RelativeTime} from "../pipes/relative-time/relative-time";
import {QuickReplyComponent} from "../components/quick-reply/quick-reply";
import {CardComponent} from "../components/card/card";
import {AuthService} from '../providers/auth-service/auth-service';
import {LoginPage} from "../pages/login/login";
import {TextMaskModule} from "angular2-text-mask";
import {SafePipe} from "../pipes/safe/safe";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ServiceDeskPage,
    LoginPage,
    RelativeTime,
    SafePipe,
    QuickReplyComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TextMaskModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ServiceDeskPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatService,
    AuthService
  ]
})
export class AppModule {}
