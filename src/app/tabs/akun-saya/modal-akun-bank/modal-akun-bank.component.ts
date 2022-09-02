import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-akun-bank',
  templateUrl: './modal-akun-bank.component.html',
  styleUrls: ['./modal-akun-bank.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ModalAkunBankComponent implements OnInit {
  constructor(private modalCtrl: ModalController) { }
  ngOnInit(): void {
  }

  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data);
  }
}
