import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsBillComponent } from './client-details-bill.component';

describe('ClientDetailsBillComponent', () => {
  let component: ClientDetailsBillComponent;
  let fixture: ComponentFixture<ClientDetailsBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailsBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
