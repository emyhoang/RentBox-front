import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _router: Router, private fb: FormBuilder, private auth: AuthService) { }
  form;
  ngOnInit() {
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, emailValid()]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    }, { validator: this.matchingFields('password', 'confirm_password') })
  }

  goLogin() {
    this._router.navigate(['/login']);
  }

  createUser() {
    console.log(this.form.valid);
    console.log(this.form.value);
    this.auth.postUser(this.form.value).subscribe(user => {
      user;
    });
    this.goLogin();
  }

  isValid(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched
  }

  matchingFields(field1, field2) {
    return form => {
      if (form.controls[field1].value !== form.controls[field2].value)
        return { mismatchedFields: true }
    }
  }
}
function emailValid() {
  return control => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(control.value) ? null : { invalidEmail: true }
  }

}
