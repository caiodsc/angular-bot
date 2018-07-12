import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class UsersModule { }
