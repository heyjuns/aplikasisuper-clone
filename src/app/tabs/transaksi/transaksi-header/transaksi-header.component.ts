import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OverlapToolbarComponent } from 'src/app/shared-components/overlap-toolbar/overlap-toolbar.component';

@Component({
  selector: 'app-transaksi-header',
  templateUrl: './transaksi-header.component.html',
  styleUrls: ['./transaksi-header.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    OverlapToolbarComponent,
  ]
})
export class TransaksiHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
