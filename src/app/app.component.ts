import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground';
  message = "Angular is cool!";
  value: string = "Initial value";

  clicked() {
    this.message = "Angular is very cool!";
  }
}
