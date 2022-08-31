import { Component } from '@angular/core';
import { ListHelper } from './tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  listOfTabs: ListHelper[] = [
    {
      name: 'Beranda',
      url: 'beranda',
      icon: 'home'
    },
    {
      name: 'Transaksi',
      url: 'transaksi',
      icon: 'sync'
    },
    {
      name: 'Akun Saya',
      url: 'akun-saya',
      icon: 'person'
    },
  ];

  constructor() { }

}
