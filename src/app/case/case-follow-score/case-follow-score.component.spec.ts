import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFollowScoreComponent } from './case-follow-score.component';

describe('CaseFollowScoreComponent', () => {
  let component: CaseFollowScoreComponent;
  let fixture: ComponentFixture<CaseFollowScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFollowScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFollowScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
