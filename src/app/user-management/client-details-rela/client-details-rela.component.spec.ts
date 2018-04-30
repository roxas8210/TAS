import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsRelaComponent } from './client-details-rela.component';

describe('ClientDetailsRelaComponent', () => {
  let component: ClientDetailsRelaComponent;
  let fixture: ComponentFixture<ClientDetailsRelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailsRelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsRelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
