import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizmatPage } from './quizmat.page';

describe('QuizmatPage', () => {
  let component: QuizmatPage;
  let fixture: ComponentFixture<QuizmatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizmatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizmatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
