import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData: Auth = new Auth();

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  register() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
