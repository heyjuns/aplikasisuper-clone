import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { ModalHeaderComponent } from 'src/app/shared-components/modal-header/modal-header.component';

@Component({
  selector: 'app-modal-data-diri',
  templateUrl: './modal-data-diri.component.html',
  styleUrls: ['./modal-data-diri.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ModalHeaderComponent,
  ]
})
export class ModalDataDiriComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
