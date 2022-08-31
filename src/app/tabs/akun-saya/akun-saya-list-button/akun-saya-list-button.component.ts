import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

interface ListWithActionHelper {
  icon: string;
  title: string;
  subtitle: string;
  action(): void;
}

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
  listOfPersonalInfo: ListWithActionHelper[] = [
    {
      icon: 'person-circle-outline',
      title: 'Data Diri',
      subtitle: 'Atur atau ubah data diri',
      action: () => this.openModalDataDiri(),
    },
    {
      icon: 'location-outline',
      title: 'Alamat Pengiriman',
      subtitle: 'Lihat & ubah alamat pengiriman',
      action: () => this.openModalAlamatPengiriman(),
    },
    {
      icon: 'card-outline',
      title: 'Akun Bank',
      subtitle: 'Lihat daftar bank saya',
      action: () => this.openModalAkunBank(),
    },
    {
      icon: 'ticket-outline',
      title: 'Voucher',
      subtitle: 'Lihat semua promo & voucher menarik',
      action: () => this.openModalVoucher(),
    },
    {
      icon: 'pricetag-outline',
      title: 'Usulan Harga & Produk',
      subtitle: 'Ajukan harga dan produk yang kamu inginkan',
      action: () => this.openModalUsulanHargaProduk(),
    },
    {
      icon: 'help-circle-outline',
      title: 'Bantuan',
      subtitle: 'Semua bantuan & informasi seputar aplikasi Super',
      action: () => this.openModalBantuan(),
    },
    {
      icon: 'settings-outline',
      title: 'Pengaturan',
      subtitle: 'Kelola Informasi dan akun disini',
      action: () => this.openModalPengaturan(),
    },
    {
      icon: 'star-outline',
      title: 'Beri Penilaian',
      subtitle: 'Berikan tanggapanmu tentang Aplikasi Super!',
      action: () => this.openModalPengaturan(),
    },
  ];
  constructor() { }

  ngOnInit() { }

  openModalDataDiri() {
    throw new Error('Method not implemented.');
  }
  openModalAlamatPengiriman(): void {
    throw new Error('Method not implemented.');
  }
  openModalAkunBank(): void {
    throw new Error('Method not implemented.');
  }
  openModalVoucher(): void {
    throw new Error('Method not implemented.');
  }
  openModalUsulanHargaProduk(): void {
    throw new Error('Method not implemented.');
  }
  openModalBantuan(): void {
    throw new Error('Method not implemented.');
  }
  openModalPengaturan(): void {
    throw new Error('Method not implemented.');
  }

}
