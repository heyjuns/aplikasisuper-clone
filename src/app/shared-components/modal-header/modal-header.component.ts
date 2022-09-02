import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ModalHeaderComponent implements OnInit {
  @Input() title!: string;
  constructor(private modalCtrl: ModalController) { }
  ngOnInit(): void {
  }

  dismissModal(data?: any) {
    this.modalCtrl.dismiss(data);
  }
}
