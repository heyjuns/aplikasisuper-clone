import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-bantuan',
  templateUrl: './modal-bantuan.component.html',
  styleUrls: ['./modal-bantuan.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ModalBantuanComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
