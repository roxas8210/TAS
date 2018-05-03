import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSearchProfessionComponent } from './teacher-search-profession.component';

describe('TeacherSearchProfessionComponent', () => {
  let component: TeacherSearchProfessionComponent;
  let fixture: ComponentFixture<TeacherSearchProfessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSearchProfessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSearchProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
