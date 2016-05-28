import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'chat-list',
  templateUrl: 'chat-list.component.html',
  styleUrls: ['chat-list.component.css']
})
export class ChatListComponent implements OnInit, OnChanges {
  @Input() chatRoom: Object;
  
  chats: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    
  }

  ngOnInit() {
  }
  
  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (this.chatRoom) {
      this.chats = this.af.database.list('/chats', {
        query: {
          orderByChild: 'chatRoomId',
          equalTo: this.chatRoom['$key']
        }
      });
    }
  }

}
