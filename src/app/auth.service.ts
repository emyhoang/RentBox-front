import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from '../app/_models/user';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = 'https://intense-dawn-91436.herokuapp.com/auth'
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: Http, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  currentUserValue(): User {
    return this.currentUserSubject.value
  }

  postUser(newUser) {
    return this.http.post(this.BASE_URL + '/register', newUser)
      .pipe(
        catchError(this.handleError('postUser', {}))
      )
      ;
  }

  postLogin(newLogin) {
    return this.http.post(this.BASE_URL + '/login', newLogin)
      .pipe(map(resp => {
        let user = resp.json()['user'];

        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user))
          this.currentUserSubject.next(user)
        }

        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  private handleError<T>(operation = 'op', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error)

      return of(result as T);
    }
  }

}


