import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSearchBasicComponent } from './teacher-search-basic.component';

describe('TeacherSearchBasicComponent', () => {
  let component: TeacherSearchBasicComponent;
  let fixture: ComponentFixture<TeacherSearchBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSearchBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSearchBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
