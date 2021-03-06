import { Component, OnInit, Input} from '@angular/core';
import {NewChatComponent} from '../new-chat/new-chat.component';
import {ChatListComponent} from '../chat-list/chat-list.component';

@Component({
  moduleId: module.id,
  selector: 'chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css'],
  directives: [NewChatComponent, ChatListComponent]
})
export class ChatComponent implements OnInit {
  @Input() chatRoom: Object;
  @Input() currentUser: Object;
  
  constructor() {

  }

  ngOnInit() {
  }

}
