import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalHeaderComponent } from 'src/app/shared-components/modal-header/modal-header.component';

@Component({
  selector: 'app-modal-bantuan',
  templateUrl: './modal-bantuan.component.html',
  styleUrls: ['./modal-bantuan.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ModalHeaderComponent,
  ]
})
export class ModalBantuanComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
