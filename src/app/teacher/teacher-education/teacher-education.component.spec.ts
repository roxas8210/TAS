import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEducationComponent } from './teacher-education.component';

describe('TeacherEducationComponent', () => {
  let component: TeacherEducationComponent;
  let fixture: ComponentFixture<TeacherEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
