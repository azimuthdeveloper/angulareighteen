import {Component, signal} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {Location} from "@angular/common";
import {LoginType} from "../../services/authentication.service";

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.scss'
})
export class UnauthorizedComponent {

  loginDuringAuth = signal<number | undefined>(undefined)
  loginType = LoginType;

  constructor(private _location: Location, private _router: Router) {
    console.log(this._router.getCurrentNavigation()?.extras.state);
    this.loginDuringAuth.set(_router.getCurrentNavigation()?.extras?.state?.['loginDuringAuth']);
  }
  goBack(){
    this._location.back();
    this.loginType;
    for (let okay of this.loginType){

    }
  }

  protected readonly LoginType = LoginType;
}
