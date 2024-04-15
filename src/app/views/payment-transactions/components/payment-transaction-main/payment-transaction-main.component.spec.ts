import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentTransactionMainComponent } from './payment-transaction-main.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PaymentTransactionMainComponent', () => {
  let component: PaymentTransactionMainComponent;
  let fixture: ComponentFixture<PaymentTransactionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentTransactionMainComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PaymentTransactionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
