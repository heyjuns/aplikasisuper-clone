import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-voucher',
  templateUrl: './modal-voucher.component.html',
  styleUrls: ['./modal-voucher.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ModalVoucherComponent implements OnInit {
  constructor(private modalCtrl: ModalController) { }
  ngOnInit(): void {
  }

  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data);
  }
}
