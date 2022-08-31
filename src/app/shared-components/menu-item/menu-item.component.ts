import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListHelper } from 'src/app/tabs/tabs';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
  ]
})
export class MenuItemComponent implements OnInit {
  @Input() title: string;
  @Input() menuItems: ListHelper[] = [];
  constructor() { }

  ngOnInit() { }

}
