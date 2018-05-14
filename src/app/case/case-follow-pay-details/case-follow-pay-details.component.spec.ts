import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFollowPayDetailsComponent } from './case-follow-pay-details.component';

describe('CaseFollowPayDetailsComponent', () => {
  let component: CaseFollowPayDetailsComponent;
  let fixture: ComponentFixture<CaseFollowPayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFollowPayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFollowPayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
