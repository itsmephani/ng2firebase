import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'chatroom',
  templateUrl: 'chatroom.component.html',
  styleUrls: ['chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  chatRoom: string;
  chatRooms: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.chatRooms = af.database.list('/chatrooms');
  }

  create(event: KeyboardEvent) {
    if (this.chatRoom && event.keyCode == 13) {
      this.chatRooms.push({name: this.chatRoom});
      this.chatRoom = '';
    }
  }

  ngOnInit() {
  }

}
