import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() menuItem: { id: number, title: string }[];
  @Output() changed = new EventEmitter<{id: number, title: string}>();
  @Output() anotherChanged = new EventEmitter<any>();
  setItem(e: Event, item: {id: number, title: string}): void {
    e.preventDefault();
    this.changed.emit(item);
  }
  ngOnInit() {
    this.anotherChanged.emit(123);
  }
}

