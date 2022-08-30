import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BerandaHeaderComponent } from './beranda-header/beranda-header.component';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.scss'],
  standalone: true,
  imports:[
    IonicModule,
    BerandaHeaderComponent
  ]
})
export class BerandaComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
