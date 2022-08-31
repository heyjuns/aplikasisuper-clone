import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DompetSuperStatusComponent } from 'src/app/shared-components/dompet-super-status/dompet-super-status.component';
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
  listOfSuperDigital: ListHelper[] = [
    {
      icon: 'desktop',
      name: 'Pulsa & Paket Data'
    },
    {
      icon:'flash',
      name:'Listrik PLN'
    },
    {
      icon:'wine',
      name:'Air PDAM'
    },
    {
      icon:'medkit',
      name:'BPJS Kesehatan'
    },

  ];

  constructor() { }

  ngOnInit() { }

}
