import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFollowPayRecordComponent } from './case-follow-pay-record.component';

describe('CaseFollowPayRecordComponent', () => {
  let component: CaseFollowPayRecordComponent;
  let fixture: ComponentFixture<CaseFollowPayRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFollowPayRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFollowPayRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
