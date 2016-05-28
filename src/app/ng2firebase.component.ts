import { Component } from '@angular/core';
import {ChatroomComponent} from './chatroom/chatroom.component';
import {LoginComponent} from './login/login.component';
import {User} from './shared/user';

@Component({
  moduleId: module.id,
  selector: 'ng2firebase-app',
  templateUrl: 'ng2firebase.component.html',
  styleUrls: ['ng2firebase.component.css'],
  directives: [ChatroomComponent, LoginComponent]
})
export class Ng2firebaseAppComponent {
  private loggedIn: boolean = false;
  private currentUser: User;
  
  onUserLoggedIn(user) {
    this.loggedIn = true;
    this.currentUser = user;
  }
}
