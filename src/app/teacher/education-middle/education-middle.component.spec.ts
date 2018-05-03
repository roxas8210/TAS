import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationMiddleComponent } from './education-middle.component';

describe('EducationMiddleComponent', () => {
  let component: EducationMiddleComponent;
  let fixture: ComponentFixture<EducationMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
