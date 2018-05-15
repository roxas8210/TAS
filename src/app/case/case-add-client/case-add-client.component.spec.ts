import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseAddClientComponent } from './case-add-client.component';

describe('CaseAddClientComponent', () => {
  let component: CaseAddClientComponent;
  let fixture: ComponentFixture<CaseAddClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseAddClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
