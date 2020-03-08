import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortPage } from './port.page';

describe('PortPage', () => {
  let component: PortPage;
  let fixture: ComponentFixture<PortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
