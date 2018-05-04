import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherOtherComponent } from './teacher-other.component';

describe('TeacherOtherComponent', () => {
  let component: TeacherOtherComponent;
  let fixture: ComponentFixture<TeacherOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
