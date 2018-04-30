import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsBasicComponent } from './client-details-basic.component';

describe('ClientDetailsBasicComponent', () => {
  let component: ClientDetailsBasicComponent;
  let fixture: ComponentFixture<ClientDetailsBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailsBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
