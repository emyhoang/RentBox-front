import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newLogin: any;
  loginErrorMessage: string;

  constructor(private _route: ActivatedRoute,
    private _router: Router, private auth: AuthService) {
    if (this.auth !== null && this.auth.currentUserValue() !== null) {
      this._router.navigate(['/'])
    }
  }

  ngOnInit() {
    this.newLogin = {
      email: "",
      password: "",
    };
  }

  goProductPage() {
    this._router.navigate(['/products']);
  }

  login() {
    this.auth.postLogin(this.newLogin).subscribe(resp => {
      this.goProductPage();
    }, (err) => {
      if (err.status === 401) {
        this.loginErrorMessage = 'Invalid Credentials';
      } else {
        this.loginErrorMessage = JSON.stringify(err)
      }
    })
  }
}


