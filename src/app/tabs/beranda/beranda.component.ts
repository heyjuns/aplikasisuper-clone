import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DompetSuperStatusComponent } from 'src/app/shared-components/dompet-super-status/dompet-super-status.component';
import { OverlapToolbarComponent } from 'src/app/shared-components/overlap-toolbar/overlap-toolbar.component';
import { BerandaHeaderComponent } from './beranda-header/beranda-header.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.scss'],
  standalone: true,
  imports:[
    IonicModule,
    BerandaHeaderComponent,
    DompetSuperStatusComponent,
    OverlapToolbarComponent,
    ImageCarouselComponent,
  ]
})
export class BerandaComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
