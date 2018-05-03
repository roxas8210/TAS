import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSearchPresearchComponent } from './teacher-search-presearch.component';

describe('TeacherSearchPresearchComponent', () => {
  let component: TeacherSearchPresearchComponent;
  let fixture: ComponentFixture<TeacherSearchPresearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSearchPresearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSearchPresearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
