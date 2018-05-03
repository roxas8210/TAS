import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRelaComponent } from './teacher-rela.component';

describe('TeacherRelaComponent', () => {
  let component: TeacherRelaComponent;
  let fixture: ComponentFixture<TeacherRelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherRelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
