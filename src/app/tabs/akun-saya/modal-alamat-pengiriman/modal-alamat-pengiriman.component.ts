import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-alamat-pengiriman',
  templateUrl: './modal-alamat-pengiriman.component.html',
  styleUrls: ['./modal-alamat-pengiriman.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ModalAlamatPengirimanComponent implements OnInit {
  constructor(private modalCtrl: ModalController) { }
  ngOnInit(): void {
  }

  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data);
  }
}
