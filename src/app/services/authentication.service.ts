import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userLogin$ = new BehaviorSubject<LoginType | undefined>(undefined)

  constructor() { }

  login(userType: LoginType){
    this.userLogin$.next(userType);
  }

  logout() {
    this.userLogin$.next(undefined);
  }
}

export enum LoginType{
  NormalUser,
  AdminUser
}
