import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSearchEducationComponent } from './teacher-search-education.component';

describe('TeacherSearchEducationComponent', () => {
  let component: TeacherSearchEducationComponent;
  let fixture: ComponentFixture<TeacherSearchEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSearchEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSearchEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
