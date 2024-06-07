import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginSimulatorComponent} from "./shared/login-simulator/login-simulator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginSimulatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Journalpedia';
}
