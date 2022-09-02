import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalHeaderComponent } from 'src/app/shared-components/modal-header/modal-header.component';

@Component({
  selector: 'app-modal-voucher',
  templateUrl: './modal-voucher.component.html',
  styleUrls: ['./modal-voucher.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ModalHeaderComponent,
  ]
})
export class ModalVoucherComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
