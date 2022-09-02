import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { ModalHeaderComponent } from 'src/app/shared-components/modal-header/modal-header.component';

@Component({
  selector: 'app-modal-akun-bank',
  templateUrl: './modal-akun-bank.component.html',
  styleUrls: ['./modal-akun-bank.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ModalHeaderComponent,
  ]
})
export class ModalAkunBankComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

}
