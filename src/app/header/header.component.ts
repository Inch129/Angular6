import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public test;
  public menuItems: { id: number, title: string }[] = [{id: 1, title: 'Первый раздел'}, {id: 2, title: 'Второй раздел'}];
  public menuItem: any;
  myFunc = item => {
    console.log(item);
  }
}
