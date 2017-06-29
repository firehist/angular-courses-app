import { AuthService, IUser } from './../../../shared/services/auth.service';
import { IAuth } from '../../../shared/services/auth.service';

import { Observable } from 'rxjs/Observable';
import { ViewEncapsulation, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user$: Observable<boolean | IUser>

  constructor(private authService: AuthService) {
    // We get IAuth object
    this.user$ = authService.auth$
      .map(auth => auth.logged && auth.user) // We transform it to false if not logged, or to auth.user if logged to get user object
  }

  logout() {
    this.authService.logout()
  }

}
