import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSelfComponent } from './teacher-self.component';

describe('TeacherSelfComponent', () => {
  let component: TeacherSelfComponent;
  let fixture: ComponentFixture<TeacherSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
