/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UMS';
  debugElement: any;
  static debugElement: any;
}
