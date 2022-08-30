import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AkunSayaHeaderComponent } from './akun-saya-header/akun-saya-header.component';

@Component({
  selector: 'app-akun-saya',
  templateUrl: './akun-saya.component.html',
  styleUrls: ['./akun-saya.component.scss'],
  standalone: true,
  imports:[
    IonicModule,
    AkunSayaHeaderComponent,
  ]
})
export class AkunSayaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
