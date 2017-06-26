import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  readonly auth$: Observable<IAuth>

  private _auth$: BehaviorSubject<IAuth>
  private dataStore: IAuth

  constructor() {
    this.dataStore = {
      logged: false
    }
    this._auth$ = new BehaviorSubject(this.dataStore)
    this.auth$ = this._auth$.asObservable()
  }

  login(email, password) {
    this.dataStore.logged = true
    this._next()
  }

  logout() {
    this.dataStore.logged = false
    this._next()
  }

  private _next() {
    this._auth$.next(this.dataStore)
  }

}

export interface IAuth {
  logged: boolean
}
