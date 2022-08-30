import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DompetSuperStatusComponent } from 'src/app/shared-components/dompet-super-status/dompet-super-status.component';
import { OverlapToolbarComponent } from 'src/app/shared-components/overlap-toolbar/overlap-toolbar.component';
import { AkunSayaCardComponent } from '../akun-saya-card/akun-saya-card.component';

@Component({
  selector: 'app-akun-saya-header',
  templateUrl: './akun-saya-header.component.html',
  styleUrls: ['./akun-saya-header.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    OverlapToolbarComponent,
    AkunSayaCardComponent,
    DompetSuperStatusComponent,
  ]
})
export class AkunSayaHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
