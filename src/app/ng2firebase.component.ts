import { Component } from '@angular/core';
import {ChatroomComponent} from './chatroom/chatroom.component';

@Component({
  moduleId: module.id,
  selector: 'ng2firebase-app',
  templateUrl: 'ng2firebase.component.html',
  styleUrls: ['ng2firebase.component.css'],
  directives: [ChatroomComponent]
})
export class Ng2firebaseAppComponent {
  title = 'ng2firebase works!';
}
