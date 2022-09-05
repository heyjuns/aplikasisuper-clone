import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MenuCardItem } from './menu-card';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class MenuCardComponent implements OnInit {
  @Input() title!: string;
  @Input() menuItems!: MenuCardItem[];
  constructor() { }

  ngOnInit() { }

}
