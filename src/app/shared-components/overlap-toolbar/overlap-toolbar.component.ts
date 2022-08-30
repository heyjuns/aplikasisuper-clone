import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-overlap-toolbar',
  templateUrl: './overlap-toolbar.component.html',
  styleUrls: ['./overlap-toolbar.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
  ]
})
export class OverlapToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
