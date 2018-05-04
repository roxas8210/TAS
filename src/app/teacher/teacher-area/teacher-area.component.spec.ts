import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAreaComponent } from './teacher-area.component';

describe('TeacherAreaComponent', () => {
  let component: TeacherAreaComponent;
  let fixture: ComponentFixture<TeacherAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
