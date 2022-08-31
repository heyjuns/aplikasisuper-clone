import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AkunSayaHeaderComponent } from './akun-saya-header/akun-saya-header.component';
import { AkunSayaListButtonComponent } from './akun-saya-list-button/akun-saya-list-button.component';

@Component({
  selector: 'app-akun-saya',
  templateUrl: './akun-saya.component.html',
  styleUrls: ['./akun-saya.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    AkunSayaHeaderComponent,
    AkunSayaListButtonComponent,
  ]
})
export class AkunSayaComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
