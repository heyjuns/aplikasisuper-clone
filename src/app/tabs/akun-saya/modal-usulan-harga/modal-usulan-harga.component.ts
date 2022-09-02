import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalHeaderComponent } from 'src/app/shared-components/modal-header/modal-header.component';

@Component({
  selector: 'app-modal-usulan-harga',
  templateUrl: './modal-usulan-harga.component.html',
  styleUrls: ['./modal-usulan-harga.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ModalHeaderComponent,
  ]
})
export class ModalUsulanHargaComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
