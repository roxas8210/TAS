import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSearchSubjectComponent } from './teacher-search-subject.component';

describe('TeacherSearchSubjectComponent', () => {
  let component: TeacherSearchSubjectComponent;
  let fixture: ComponentFixture<TeacherSearchSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSearchSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSearchSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
