import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AkunSayaListButtonComponent } from './akun-saya-list-button.component';

describe('AkunSayaListButtonComponent', () => {
  let component: AkunSayaListButtonComponent;
  let fixture: ComponentFixture<AkunSayaListButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AkunSayaListButtonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AkunSayaListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
