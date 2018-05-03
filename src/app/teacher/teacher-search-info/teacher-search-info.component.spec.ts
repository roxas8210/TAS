import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSearchInfoComponent } from './teacher-search-info.component';

describe('TeacherSearchInfoComponent', () => {
  let component: TeacherSearchInfoComponent;
  let fixture: ComponentFixture<TeacherSearchInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSearchInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSearchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
