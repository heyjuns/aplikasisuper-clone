import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { ModalHeaderComponent } from 'src/app/shared-components/modal-header/modal-header.component';

@Component({
  selector: 'app-modal-pengaturan',
  templateUrl: './modal-pengaturan.component.html',
  styleUrls: ['./modal-pengaturan.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ModalHeaderComponent,
  ]
})
export class ModalPengaturanComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
