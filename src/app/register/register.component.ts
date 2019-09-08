import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser: Auth = new Auth();

  constructor() { }

  ngOnInit() {
  }

  register() {
    console.log(this.registerUser)
  }
}
