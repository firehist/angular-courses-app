import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  readonly auth$: Observable<IAuth>

  private _auth$: BehaviorSubject<IAuth>
  private dataStore: IAuth

  constructor(private _router: Router) {
    this.dataStore = {
      logged: false,
      user: null
    }
    this._auth$ = new BehaviorSubject(this.dataStore)
    this.auth$ = this._auth$.asObservable()
  }

  login(email, password) {
    this.dataStore.logged = true
    this.dataStore.user = {
      login: email
    }
    this._next()
  }

  logout() {
    this.dataStore.logged = false
    this.dataStore.user = null
    this._next()
    
    this._router.navigateByUrl('/')
  }

  private _next() {
    this._auth$.next(this.dataStore)
  }

}

export interface IUser {
  login: string
}

export interface IAuth {
  logged: boolean
  user: IUser
}
