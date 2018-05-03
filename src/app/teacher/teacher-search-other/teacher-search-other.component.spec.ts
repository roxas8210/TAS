import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSearchOtherComponent } from './teacher-search-other.component';

describe('TeacherSearchOtherComponent', () => {
  let component: TeacherSearchOtherComponent;
  let fixture: ComponentFixture<TeacherSearchOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSearchOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSearchOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
