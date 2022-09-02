export interface ListWithActionHelper {
  icon: string;
  title: string;
  subtitle: string;
  action(): void;
}

export type AcceptableModalAkunSaya =
  'DATA_DIRI' |
  'ALAMAT_PENGIRIMAN' |
  'AKUN_BANK' |
  'VOUCHER' |
  'USULAN_HARGA' |
  'BANTUAN' |
  'PENGATURAN' |
  'BERI_PENILAIAN';
