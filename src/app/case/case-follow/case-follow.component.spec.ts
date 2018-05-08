import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFollowComponent } from './case-follow.component';

describe('CaseFollowComponent', () => {
  let component: CaseFollowComponent;
  let fixture: ComponentFixture<CaseFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
