import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavedInfoPage } from './saved-info.page';

describe('SavedInfoPage', () => {
  let component: SavedInfoPage;
  let fixture: ComponentFixture<SavedInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
