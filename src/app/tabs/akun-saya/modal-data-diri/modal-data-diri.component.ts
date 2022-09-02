import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-data-diri',
  templateUrl: './modal-data-diri.component.html',
  styleUrls: ['./modal-data-diri.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ModalDataDiriComponent implements OnInit {
  constructor(private modalCtrl: ModalController) { }
  ngOnInit(): void {
  }

  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data);
  }
}
