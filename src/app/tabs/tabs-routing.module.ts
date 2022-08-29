import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkunSayaComponent } from './akun-saya/akun-saya.component';
import { BerandaComponent } from './beranda/beranda.component';
import { TabsPage } from './tabs.page';
import { TransaksiComponent } from './transaksi/transaksi.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    loadChildren: () => [
      {
        path: 'beranda',
        component: BerandaComponent,
      },
      {
        path: 'transaksi',
        component: TransaksiComponent,
      },
      {
        path: 'akun-saya',
        component: AkunSayaComponent,
      },
      {
        path: '',
        redirectTo: '/tabs/beranda',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/beranda',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
