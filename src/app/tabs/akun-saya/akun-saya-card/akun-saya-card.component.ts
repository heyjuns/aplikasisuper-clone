import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-akun-saya-card',
  templateUrl: './akun-saya-card.component.html',
  styleUrls: ['./akun-saya-card.component.scss'],
  standalone:true,
  imports:[
    IonicModule
  ]
})
export class AkunSayaCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
