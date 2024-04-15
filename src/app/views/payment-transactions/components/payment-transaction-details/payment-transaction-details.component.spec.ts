import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTransactionDetailsComponent } from './payment-transaction-details.component';

describe('PaymentTransactionDetailsComponent', () => {
  let component: PaymentTransactionDetailsComponent;
  let fixture: ComponentFixture<PaymentTransactionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTransactionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentTransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
