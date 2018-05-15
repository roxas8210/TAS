import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSelectClientComponent } from './case-select-client.component';

describe('CaseSelectClientComponent', () => {
  let component: CaseSelectClientComponent;
  let fixture: ComponentFixture<CaseSelectClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseSelectClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSelectClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
