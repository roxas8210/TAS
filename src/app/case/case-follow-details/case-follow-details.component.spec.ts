import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFollowDetailsComponent } from './case-follow-details.component';

describe('CaseFollowDetailsComponent', () => {
  let component: CaseFollowDetailsComponent;
  let fixture: ComponentFixture<CaseFollowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFollowDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFollowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
