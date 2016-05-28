import { Component, OnInit, Input } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'new-chat',
  templateUrl: 'new-chat.component.html',
  styleUrls: ['new-chat.component.css']
})
export class NewChatComponent implements OnInit {
  @Input() chatRoom: Object;
  
  private newMessage: string;
  chats: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.chats = af.database.list('/chats');
  }

  ngOnInit() {
  }

  send() {
    if (this.newMessage) {
      this.chats.push({
        message: this.newMessage,
        chatRoomId: this.chatRoom['$key'],
        createdAt: new Date()
      });
      this.newMessage = '';
    }
  }

}
