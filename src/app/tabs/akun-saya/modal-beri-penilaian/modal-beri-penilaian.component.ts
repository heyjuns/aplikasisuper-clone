import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-beri-penilaian',
  templateUrl: './modal-beri-penilaian.component.html',
  styleUrls: ['./modal-beri-penilaian.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ModalBeriPenilaianComponent implements OnInit {
  constructor(private modalCtrl: ModalController) { }
  ngOnInit(): void {
  }

  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data);
  }
}
