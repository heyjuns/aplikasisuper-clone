import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AcceptableModalAkunSaya, ListWithActionHelper } from '../akun-saya';
import { ModalAkunBankComponent } from '../modal-akun-bank/modal-akun-bank.component';
import { ModalAlamatPengirimanComponent } from '../modal-alamat-pengiriman/modal-alamat-pengiriman.component';
import { ModalBantuanComponent } from '../modal-bantuan/modal-bantuan.component';
import { ModalBeriPenilaianComponent } from '../modal-beri-penilaian/modal-beri-penilaian.component';
import { ModalDataDiriComponent } from '../modal-data-diri/modal-data-diri.component';
import { ModalPengaturanComponent } from '../modal-pengaturan/modal-pengaturan.component';
import { ModalUsulanHargaComponent } from '../modal-usulan-harga/modal-usulan-harga.component';
import { ModalVoucherComponent } from '../modal-voucher/modal-voucher.component';


@Component({
  selector: 'app-akun-saya-list-button',
  templateUrl: './akun-saya-list-button.component.html',
  styleUrls: ['./akun-saya-list-button.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
  ]
})
export class AkunSayaListButtonComponent implements OnInit {
  version: string = environment.appVersion;
  listOfPersonalInfo: ListWithActionHelper[] = [
    {
      icon: 'person-circle-outline',
      title: 'Data Diri',
      subtitle: 'Atur atau ubah data diri',
      action: () => this.openModalByTitle('DATA_DIRI'),
    },
    {
      icon: 'location-outline',
      title: 'Alamat Pengiriman',
      subtitle: 'Lihat & ubah alamat pengiriman',
      action: () => this.openModalByTitle('ALAMAT_PENGIRIMAN'),
    },
    {
      icon: 'card-outline',
      title: 'Akun Bank',
      subtitle: 'Lihat daftar bank saya',
      action: () => this.openModalByTitle('AKUN_BANK'),
    },
    {
      icon: 'ticket-outline',
      title: 'Voucher',
      subtitle: 'Lihat semua promo & voucher menarik',
      action: () => this.openModalByTitle('VOUCHER'),
    },
    {
      icon: 'pricetag-outline',
      title: 'Usulan Harga & Produk',
      subtitle: 'Ajukan harga dan produk yang kamu inginkan',
      action: () => this.openModalByTitle('USULAN_HARGA'),
    },
    {
      icon: 'help-circle-outline',
      title: 'Bantuan',
      subtitle: 'Semua bantuan & informasi seputar aplikasi Super',
      action: () => this.openModalByTitle('BANTUAN'),
    },
    {
      icon: 'settings-outline',
      title: 'Pengaturan',
      subtitle: 'Kelola Informasi dan akun disini',
      action: () => this.openModalByTitle('PENGATURAN'),
    },
    {
      icon: 'star-outline',
      title: 'Beri Penilaian',
      subtitle: 'Berikan tanggapanmu tentang Aplikasi Super!',
      action: () => this.openModalByTitle('BERI_PENILAIAN'),
    },
  ];
  constructor(
    private mc: ModalController,
  ) { }

  ngOnInit() { }

  async openModalByTitle(name?: AcceptableModalAkunSaya) {
    const component = this.getComponentType(name);
    const modal = await this.mc.create({
      component
    });
    modal.present();
  }
  getComponentType(name: AcceptableModalAkunSaya) {
    switch (name) {
      case 'DATA_DIRI': return ModalDataDiriComponent;
      case 'ALAMAT_PENGIRIMAN': return ModalAlamatPengirimanComponent;
      case 'AKUN_BANK': return ModalAkunBankComponent;
      case 'VOUCHER': return ModalVoucherComponent;
      case 'USULAN_HARGA': return ModalUsulanHargaComponent;
      case 'BANTUAN': return ModalBantuanComponent;
      case 'PENGATURAN': return ModalPengaturanComponent;
      case 'BERI_PENILAIAN': return ModalBeriPenilaianComponent;
      default: return;
    }
  }
}
