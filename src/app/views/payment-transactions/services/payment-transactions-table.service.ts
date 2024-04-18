import { Injectable } from '@angular/core';
import { PaymentTransactionsState } from '../store/payment-transactions.reducer';
import { select, Store } from '@ngrx/store';
import { actions } from '../store/payment-transactions.actions';
import { selectors } from '../store/payment-transactions.selectors';
import {
  BehaviorSubject,
  Observable,
  shareReplay
} from 'rxjs';
import {
  PaymentTransaction,
  PaymentTransactionRequest,
  PaymentTransactionResponse,
  PaymentTransactionTableFilters,
  TransactionStatus
} from '../models/payment-transactions.models';
import { map } from 'rxjs/operators';
import { PaginationConfig } from '../../../shared/models/table.models';
import { MatTableDataSource } from '@angular/material/table';
import { OptionItem } from '../../../shared/models/dropdown-select.models';
import { PageEvent } from '@angular/material/paginator';
import { TRANSACTION_STATUS } from '../constants/payment-transactions.constants';

@Injectable()
export class PaymentTransactionsTableService {
  /** Filter Subjects **/
  _tableFilters: BehaviorSubject<PaymentTransactionTableFilters> = new BehaviorSubject<PaymentTransactionTableFilters>({} as PaymentTransactionTableFilters);

  /** Data Observables **/
  private paymentTransactionData$: Observable<PaymentTransactionResponse> = this.store.pipe(
    select(selectors.getPaymentTransactionsData),
    shareReplay({refCount: true, bufferSize: 1})
  );

  cardData$: Observable<Array<PaymentTransaction>> = this.paymentTransactionData$.pipe(
    map(data => data.items)
  );

  tableData$: Observable<MatTableDataSource<PaymentTransaction>> = this.paymentTransactionData$.pipe(
    map(data => new MatTableDataSource(data.items))
  );

  paginationConfig$: Observable<PaginationConfig> = this.paymentTransactionData$.pipe(
    map(data => ({
      pageSize: data.pageSize,
      totalNumberOfItems: data.totalNumberOfItems,
      currentPage: data.currentPage
    }))
  );

  tableDataLoading$: Observable<boolean> = this.store.select(selectors.getPaymentTransactionsDataLoading);

  /** **/
  constructor(
    private store: Store<PaymentTransactionsState>,
  ) {
    this.store.dispatch(actions.getPaymentTransactions({requestPayload: {} as PaymentTransactionRequest}));
  }

  /** Public Methods **/
  tableFilterChange(event: PaymentTransactionTableFilters) {
    //On filter change always default to page index 0
    let requestPayload: PaymentTransactionRequest = {
      createdAtEnd: event.dateRange.endDate ?? '',
      createdAtStart: event.dateRange.startDate ?? '',
      page: 0,
      size: 5,
      status: event.status ?? ''
    };

    this._tableFilters.next(event);
    this.store.dispatch(actions.getPaymentTransactions({requestPayload}));
  }

  tablePageChange(event: PageEvent) {
    const filters = this._tableFilters.value;

    const requestPayload: PaymentTransactionRequest = {
      createdAtEnd: filters.dateRange?.endDate ?? '',
      createdAtStart: filters.dateRange?.startDate ?? '',
      page: event.pageIndex,
      size: event.pageSize,
      status: filters.status ?? ''
    };

    this.store.dispatch(actions.getPaymentTransactions({requestPayload}));
  }

  getTransactionStatusOptions(): Array<OptionItem<TransactionStatus>> {
    return TRANSACTION_STATUS.map(status => ({
      label: status,
      value: status as TransactionStatus
    }));
  }
}
