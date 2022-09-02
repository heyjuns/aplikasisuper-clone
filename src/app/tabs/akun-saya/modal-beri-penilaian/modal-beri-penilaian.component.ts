import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { ModalHeaderComponent } from 'src/app/shared-components/modal-header/modal-header.component';

@Component({
  selector: 'app-modal-beri-penilaian',
  templateUrl: './modal-beri-penilaian.component.html',
  styleUrls: ['./modal-beri-penilaian.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ModalHeaderComponent,
  ]
})
export class ModalBeriPenilaianComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
