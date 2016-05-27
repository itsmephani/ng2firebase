import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'chat-list',
  templateUrl: 'chat-list.component.html',
  styleUrls: ['chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  chats: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.chats = af.database.list('/chats');
  }

  ngOnInit() {
  }

}
