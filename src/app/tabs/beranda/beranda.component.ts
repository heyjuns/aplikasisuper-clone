import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DompetSuperStatusComponent } from 'src/app/shared-components/dompet-super-status/dompet-super-status.component';
import { MenuCardItem } from 'src/app/shared-components/menu-card/menu-card';
import { MenuCardComponent } from 'src/app/shared-components/menu-card/menu-card.component';
import { MenuItemComponent } from 'src/app/shared-components/menu-item/menu-item.component';
import { OverlapToolbarComponent } from 'src/app/shared-components/overlap-toolbar/overlap-toolbar.component';
import { ListHelper } from '../tabs';
import { BerandaHeaderComponent } from './beranda-header/beranda-header.component';
import { ImageSlideshowComponent } from './image-slideshow/image-slideshow.component';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    BerandaHeaderComponent,
    DompetSuperStatusComponent,
    OverlapToolbarComponent,
    ImageSlideshowComponent,
    MenuItemComponent,
    MenuCardComponent,
  ]
})
export class BerandaComponent implements OnInit {
  listOfProductCategory: ListHelper[] = [
    {
      icon: 'apps',
      name: 'Semua Kategori',
    },
    {
      icon: 'camera',
      name: 'Kecantikan',
    },
    {
      icon: 'diamond',
      name: 'Perawatan Tubuh'
    }
  ];
  listOfSuperDigital: MenuCardItem[] = [
    {
      icon: 'desktop',
      name: 'Sari Ayu Cantikan 1Kg',
      type: 'Pouch',
      startPrice: Math.floor(Math.random() * 10 * 10000)
    },
    {
      icon: 'flash',
      name: 'Martabak Bagelan 500Gr',
      type: 'Besek',
      startPrice: Math.floor(Math.random() * 10 * 10000)
    },
    {
      icon: 'wine',
      name: 'Sari Buah Apel 1Kg',
      type: 'Dus',
      startPrice: Math.floor(Math.random() * 10 * 10000)
    },
    {
      icon: 'medkit',
      name: 'Obat obatan 1Kg',
      type: 'Dus',
      startPrice: Math.floor(Math.random() * 10 * 10000)
    },
    {
      icon: 'desktop',
      name: 'Sari Ayu Cantikan 1Kg',
      type: 'Pouch',
      startPrice: Math.floor(Math.random() * 10 * 10000)
    },
    {
      icon: 'flash',
      name: 'Martabak Bagelan 500Gr',
      type: 'Besek',
      startPrice: Math.floor(Math.random() * 10 * 10000)
    },
    {
      icon: 'wine',
      name: 'Sari Buah Apel 1Kg',
      type: 'Dus',
      startPrice: Math.floor(Math.random() * 10 * 1000)
    },
    {
      icon: 'medkit',
      name: 'Obat obatan 1Kg',
      type: 'Dus',
      startPrice: Math.floor(Math.random() * 10 * 1000)
    },
    {
      icon: 'desktop',
      name: 'Sari Ayu Cantikan 1Kg',
      type: 'Pouch',
      startPrice: Math.floor(Math.random() * 10 * 1000)
    },
    {
      icon: 'flash',
      name: 'Martabak Bagelan 500Gr',
      type: 'Besek',
      startPrice: Math.floor(Math.random() * 10 * 10000)
    },
    {
      icon: 'wine',
      name: 'Sari Buah Apel 1Kg',
      type: 'Dus',
      startPrice: Math.floor(Math.random() * 10 * 10000)
    },
    {
      icon: 'medkit',
      name: 'Obat obatan 1Kg',
      type: 'Dus',
      startPrice: Math.floor(Math.random() * 10 * 10000)
    },
  ];

  constructor() { }

  ngOnInit() { }

}
