import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TransaksiHeaderComponent } from './transaksi-header/transaksi-header.component';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.component.html',
  styleUrls: ['./transaksi.component.scss'],
  standalone: true,
  imports:[
    IonicModule,
    TransaksiHeaderComponent,
  ]
})
export class TransaksiComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
