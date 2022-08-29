import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.component.html',
  styleUrls: ['./transaksi.component.scss'],
  standalone: true,
  imports:[
    IonicModule,
  ]
})
export class TransaksiComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
