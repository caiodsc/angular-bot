import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      apiPath: 'http://192.168.99.100:3000/api/v1',
      signInRedirect: '/login',
      globalOptions: {
        headers: {
          'Content-Type':     'application/json',
          'Accept':           'application/json'
        }
      }
    });
  }
}
