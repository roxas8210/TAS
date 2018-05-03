import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherReviewComponent } from './teacher-review.component';

describe('TeacherReviewComponent', () => {
  let component: TeacherReviewComponent;
  let fixture: ComponentFixture<TeacherReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
