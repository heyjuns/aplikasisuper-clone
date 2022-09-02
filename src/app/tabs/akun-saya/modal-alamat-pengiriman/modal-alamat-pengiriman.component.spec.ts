import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAlamatPengirimanComponent } from './modal-alamat-pengiriman.component';

describe('ModalAlamatPengirimanComponent', () => {
  let component: ModalAlamatPengirimanComponent;
  let fixture: ComponentFixture<ModalAlamatPengirimanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAlamatPengirimanComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAlamatPengirimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
