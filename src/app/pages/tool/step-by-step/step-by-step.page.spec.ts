import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepByStepPage } from './step-by-step.page';

describe('StepByStepPage', () => {
  let component: StepByStepPage;
  let fixture: ComponentFixture<StepByStepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepByStepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepByStepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
