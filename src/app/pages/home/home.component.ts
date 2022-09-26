import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public pageTitle = 'welcome';
  public username = 'franco david gonzalez';
  public study = 'analista de sistemas';
  public developWork = 'front-end angular';
}
