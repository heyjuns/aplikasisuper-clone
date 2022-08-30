import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OverlapToolbarComponent } from 'src/app/shared-components/overlap-toolbar/overlap-toolbar.component';

@Component({
  selector: 'app-beranda-header',
  templateUrl: './beranda-header.component.html',
  styleUrls: ['./beranda-header.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    OverlapToolbarComponent,
  ]
})
export class BerandaHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
