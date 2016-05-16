import { Component, Input } from 'angular2/core';
@Component({
  selector: 'tab',
  template: `
  <div class="tab-content">
    <div [hidden]="!active" class="tabs-left">
     <ng-content></ng-content>
    </div>
    </div>
  `
})
export class Tab {
 @Input('tabTitle') title: string;
 @Input() active = false;
}

