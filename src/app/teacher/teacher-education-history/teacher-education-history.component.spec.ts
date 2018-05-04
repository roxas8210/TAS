import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEducationHistoryComponent } from './teacher-education-history.component';

describe('TeacherEducationHistoryComponent', () => {
  let component: TeacherEducationHistoryComponent;
  let fixture: ComponentFixture<TeacherEducationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherEducationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherEducationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
