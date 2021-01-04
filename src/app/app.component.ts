/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**Title of the project */
  title = 'UMS';
  /**Variable declared for testcase of router outlet */
  debugElement: any;
  /**Variable declared for testcase of router outlet */
  static debugElement: any;
}
