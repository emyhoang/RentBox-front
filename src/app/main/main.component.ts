import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription

  constructor(private authService: AuthService) {
    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
      this.currentUser = user
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe()
  }
}
