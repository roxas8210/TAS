import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBillComponent } from './teacher-bill.component';

describe('TeacherBillComponent', () => {
  let component: TeacherBillComponent;
  let fixture: ComponentFixture<TeacherBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
