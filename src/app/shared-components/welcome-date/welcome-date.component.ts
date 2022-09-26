import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-date',
  templateUrl: './welcome-date.component.html',
  styleUrls: ['./welcome-date.component.scss']
})
export class WelcomeDateComponent {
  public today = Date.now();
  public message = 'Have a nice day :)';
}
