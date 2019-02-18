import { Component, OnInit, Input } from '@angular/core';
import { User } from '../_models/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() currentUser: User

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() { }

  isLoggedIn() {
    return this.currentUser !== null
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
