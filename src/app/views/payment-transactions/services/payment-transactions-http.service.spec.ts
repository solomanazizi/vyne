import { TestBed } from '@angular/core/testing';
import { PaymentTransactionsHttpService } from './payment-transactions-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PaymentTransactionsHttpService', () => {
  let service: PaymentTransactionsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentTransactionsHttpService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PaymentTransactionsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
