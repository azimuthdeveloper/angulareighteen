import {Component, Signal} from '@angular/core';
import {AuthenticationService, LoginType} from "../../services/authentication.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {map} from "rxjs";

@Component({
  selector: 'app-login-simulator',
  standalone: true,
  imports: [],
  templateUrl: './login-simulator.component.html',
  styleUrl: './login-simulator.component.scss'
})
export class LoginSimulatorComponent {

  loggedInUser: Signal<string | undefined>;
  loginType = LoginType;

  constructor(private authentication: AuthenticationService) {
    this.loggedInUser = toSignal(authentication.userLogin$.pipe(
      map(user => {
        if (user == undefined){
          return "Not logged in"
        }
        return LoginType[user];
      })
    ));
  }

  login(userType: LoginType){
    this.authentication.login(userType);
  }

  logout(){
    this.authentication.logout();
  }

  protected readonly LoginType = LoginType;
}
