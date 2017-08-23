import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPopupsModelsComponent } from './material-popups-models.component';

describe('MaterialPopupsModelsComponent', () => {
  let component: MaterialPopupsModelsComponent;
  let fixture: ComponentFixture<MaterialPopupsModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialPopupsModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPopupsModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
