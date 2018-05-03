import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBasicComponent } from './teacher-basic.component';

describe('TeacherBasicComponent', () => {
  let component: TeacherBasicComponent;
  let fixture: ComponentFixture<TeacherBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
