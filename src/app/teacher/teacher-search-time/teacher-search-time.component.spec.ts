import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSearchTimeComponent } from './teacher-search-time.component';

describe('TeacherSearchTimeComponent', () => {
  let component: TeacherSearchTimeComponent;
  let fixture: ComponentFixture<TeacherSearchTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSearchTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSearchTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
