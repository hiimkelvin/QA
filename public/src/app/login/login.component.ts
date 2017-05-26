import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _loginService: LoginService,
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  login(formData){
    this._loginService.login(formData.value)
    .then((user) => this._router.navigate(['/question']))
    .catch((err) => console.log(err))
  }

}
