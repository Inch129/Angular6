import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  constructor () {}
  @Output() changed = new EventEmitter<string>();
  change(currentLink: any) {
    this.changed.emit(currentLink);
  }
}

