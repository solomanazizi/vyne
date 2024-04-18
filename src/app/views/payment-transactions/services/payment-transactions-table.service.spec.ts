import { TestBed } from '@angular/core/testing';
import { PaymentTransactionsTableService } from './payment-transactions-table.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PaymentTransactionsState } from '../store/payment-transactions.reducer';
import { selectors } from '../store/payment-transactions.selectors';
import {
  PaymentTransaction,
  PaymentTransactionTableFilters
} from '../models/payment-transactions.models';
import { TestScheduler } from 'rxjs/testing';
import { PageEvent } from '@angular/material/paginator';
import { actions } from '../store/payment-transactions.actions';

const MOCK_PAYMENT_TRANSACTION_ITEMS: Array<PaymentTransaction> = [{
  'id': 'TXID_sdfb-sodj-3gb34-3r3brb',
  'amount': 23.35,
  'currency': 'GBP',
  'description': 'Test payment made only for this technical task #1',
  'status': 'CREATED',
  'createdAt': '2021-07-01T12:27:07.965'
}, {
  'id': 'TXID_fdgn-sodj-3gb34-3r3brb',
  'amount': 34.34,
  'currency': 'EUR',
  'description': 'Test payment made only for this technical task #2',
  'status': 'FAILED',
  'createdAt': '2021-07-03T12:27:07.965'
}];

const MOCK_PAYMENT_TRANSACTION_RESPONSE = {
  'totalNumberOfItems': 22,
  'numberOfPages': 1,
  'currentPage': 0,
  'pageSize': 5,
  'hasNext': false,
  'items': MOCK_PAYMENT_TRANSACTION_ITEMS
};

describe('PaymentTransactionsTableService', () => {
  let service: PaymentTransactionsTableService;
  let store: MockStore<PaymentTransactionsState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PaymentTransactionsTableService,
        provideMockStore({
          selectors: [
            {
              selector: selectors.getPaymentTransactionsData,
              value: MOCK_PAYMENT_TRANSACTION_RESPONSE
            }
          ]
        })
      ]
    });
    service = TestBed.inject(PaymentTransactionsTableService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Observable tests', () => {
    let testScheduler: TestScheduler;

    beforeAll(() => {
      testScheduler = new TestScheduler((actual, expected) => {
        return expect(actual).toEqual(expected);
      });
    });

    it('should get card data', () => {
      const testObservable = service.cardData$;
      const expectedMarbles = '(a)';
      const expectedValues = {
        a: MOCK_PAYMENT_TRANSACTION_ITEMS,
      };

      testScheduler.run(({expectObservable}) => {
        expectObservable(testObservable).toBe(
          expectedMarbles,
          expectedValues
        );
      });
    });
  });

  describe('Public methods', () => {
    it('should send request on table page change', () => {
      spyOn(store, 'dispatch');
      const mockFilters: PaymentTransactionTableFilters = {
        dateRange: {
          startDate: '01-01-2020',
          endDate: '01-01-2024'
        },
        status: 'CREATED'
      };
      const mockPageEvent: PageEvent = {
        pageIndex: 1,
        pageSize: 5,
        length: 25
      };

      service._tableFilters.next(mockFilters);
      service.tablePageChange(mockPageEvent);

      expect(store.dispatch).toHaveBeenCalledWith(
        actions.getPaymentTransactions({
          requestPayload: {
            createdAtEnd: mockFilters.dateRange.endDate,
            createdAtStart: mockFilters.dateRange.startDate,
            page: mockPageEvent.pageIndex,
            size: mockPageEvent.pageSize,
            status: mockFilters.status
          }
        })
      );
    });
  });
});
