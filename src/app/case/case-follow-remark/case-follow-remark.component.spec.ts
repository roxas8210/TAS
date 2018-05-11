import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFollowRemarkComponent } from './case-follow-remark.component';

describe('CaseFollowRemarkComponent', () => {
  let component: CaseFollowRemarkComponent;
  let fixture: ComponentFixture<CaseFollowRemarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFollowRemarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFollowRemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
