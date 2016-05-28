import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {User} from '../shared/user';
import { AngularFire } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onUserLoggedIn = new EventEmitter<any>();
  
  user: User;
  
  constructor(private af: AngularFire) {
 
  }

  ngOnInit() {
    this.initUser();
    this.af.auth.subscribe( (user) => {
      if (user) {
        this.initUser();
        this.onUserLoggedIn.next(user);
      }
    });
  }
  
  initUser() {
    this.user = {
      name: '',
      email: '',
      password: ''
    }  
  }
  
  login() {
    if (this.user.email && this.user.password) {
      this.af.auth.login({
        email: this.user.email,
        password: this.user.password 
      });
    } else {
      alert('Please enter email and password to login.');
    }    
  }
  
  signUp() {
    console.log(this.user);
    this.af.auth.createUser(this.user).then((user) => {
      console.log(user);
      this.initUser();
      this.onUserLoggedIn.emit(user);
    });;
  }

}
