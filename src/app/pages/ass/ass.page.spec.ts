import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssPage } from './ass.page';

describe('AssPage', () => {
  let component: AssPage;
  let fixture: ComponentFixture<AssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
