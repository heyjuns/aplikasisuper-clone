import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalBeriPenilaianComponent } from './modal-beri-penilaian.component';

describe('ModalBeriPenilaianComponent', () => {
  let component: ModalBeriPenilaianComponent;
  let fixture: ComponentFixture<ModalBeriPenilaianComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBeriPenilaianComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBeriPenilaianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
