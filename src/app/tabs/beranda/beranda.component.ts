import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.scss'],
  standalone: true,
  imports:[
    IonicModule,
    HeaderComponent,
  ]
})
export class BerandaComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
