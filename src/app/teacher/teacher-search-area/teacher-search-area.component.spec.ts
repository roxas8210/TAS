import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSearchAreaComponent } from './teacher-search-area.component';

describe('TeacherSearchAreaComponent', () => {
  let component: TeacherSearchAreaComponent;
  let fixture: ComponentFixture<TeacherSearchAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSearchAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSearchAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
