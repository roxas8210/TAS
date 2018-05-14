import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFollowClassRecordComponent } from './case-follow-class-record.component';

describe('CaseFollowClassRecordComponent', () => {
  let component: CaseFollowClassRecordComponent;
  let fixture: ComponentFixture<CaseFollowClassRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFollowClassRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFollowClassRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
