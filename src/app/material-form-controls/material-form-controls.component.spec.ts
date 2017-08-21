import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFormControlsComponent } from './material-form-controls.component';

describe('MaterialFormControlsComponent', () => {
  let component: MaterialFormControlsComponent;
  let fixture: ComponentFixture<MaterialFormControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialFormControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
