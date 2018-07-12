import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MaterializeModule} from 'ng2-materialize';
import { ColorPickerModule } from 'ngx-color-picker';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from "./forms/forms.module";
import {AnswersModule} from "./answers/answers.module";
import { Angular2TokenService } from 'angular2-token';

import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import {RegisterComponent} from "./users/register/register.component";
import {LoginComponent} from "./users/login/login.component";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    ColorPickerModule,
    ChartsModule,
    FormsModule,
    AnswersModule,
    RouterModule,
    HttpModule,
    routing
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
