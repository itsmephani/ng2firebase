import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { ChatComponent } from '../chat/chat.component';

@Component({
  moduleId: module.id,
  selector: 'chatroom',
  templateUrl: 'chatroom.component.html',
  styleUrls: ['chatroom.component.css'],
  directives: [ChatComponent]
})
export class ChatroomComponent implements OnInit {
  @Input() currentUser: Object;
  @Output() onEnterChatRoom = new EventEmitter<void>();

  chatRoom: string;
  selectedChatRoom: Object;
  chatRooms: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.chatRooms = af.database.list('/chatrooms');
  }

  ngOnInit() {
  }

  create(event: KeyboardEvent) {
    if (this.chatRoom && event.keyCode == 13) {
      this.chatRooms.push({name: this.chatRoom});
      this.chatRoom = '';
    }
  }
  
  onSelected(chatRoom: Object) {
    this.selectedChatRoom = chatRoom;
    this.onEnterChatRoom.emit(null);
  }

}
