import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatPage } from './mat.page';

describe('MatPage', () => {
  let component: MatPage;
  let fixture: ComponentFixture<MatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
