import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-akun-saya',
  templateUrl: './akun-saya.component.html',
  styleUrls: ['./akun-saya.component.scss'],
  standalone: true,
  imports:[
    IonicModule,
  ]
})
export class AkunSayaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
