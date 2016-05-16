//our root app component

import {Component} from 'angular2/core'
import {Tabs} from './tabs';
import {Tab} from './tab';
import {Validators, FormBuilder,Control} from 'angular2/common';
@Component({
  selector: 'my-app',
  templateUrl:'./app/clientsettings.html',
 directives: [Tabs, Tab]
})
export class AppComponent {
  constructor() {
}
}


