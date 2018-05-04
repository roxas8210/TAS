import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEducationMiddleComponent } from './teacher-education-middle.component';

describe('TeacherEducationMiddleComponent', () => {
  let component: TeacherEducationMiddleComponent;
  let fixture: ComponentFixture<TeacherEducationMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherEducationMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEducationMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
