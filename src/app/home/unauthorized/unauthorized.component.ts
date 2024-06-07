import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Location} from "@angular/common";

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

  constructor(private _location: Location) {
  }
  goBack(){
    this._location.back();
  }

}
