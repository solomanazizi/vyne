import { Injectable } from '@angular/core';
import { PaymentTransactionsState } from '../store/payment-transactions.reducer';
import { select, Store } from '@ngrx/store';
import { actions } from '../store/payment-transactions.actions';
import { selectors } from '../store/payment-transactions.selectors';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  Observable,
  shareReplay
} from 'rxjs';
import {
  PaymentTransaction,
  PaymentTransactionResponse, PaymentTransactionTableFilters, TransactionStatus
} from '../models/payment-transactions.models';
import { map } from 'rxjs/operators';
import { PaginationConfig } from '../../../shared/models/table.models';
import { MatTableDataSource } from '@angular/material/table';
import { OptionItem } from '../../../shared/models/dropdown-select.models';
import { DateRange } from '../../../shared/models/datepicket.models';
import { DateUtilsService } from '../../../shared/services/date-utils/date-utils.service';
import { PageEvent } from '@angular/material/paginator';

@Injectable()
export class PaymentTransactionsTableService {
  /** Filter Subjects **/
  _tableFilters: BehaviorSubject<PaymentTransactionTableFilters> = new BehaviorSubject<PaymentTransactionTableFilters>({} as PaymentTransactionTableFilters);
  tableFilters$ = this._tableFilters.asObservable();

  /** Data Observables **/
  private paymentTransactionData$: Observable<PaymentTransactionResponse> = this.store.pipe(
    select(selectors.getPaymentTransactionsData),
    filter(data => !!data?.items?.length),
    shareReplay({refCount: true, bufferSize: 1})
  );

  cardData$: Observable<Array<PaymentTransaction>> =
    combineLatest([
      this.paymentTransactionData$,
      this.tableFilters$
    ]).pipe(
      map(([data, tableFilters]) => {
        let items = data?.items;

        if (!!tableFilters?.status?.length) {
          items = this.filterByStatus(items, tableFilters.status);
        }

        if (!!tableFilters?.dateRange?.startDate && !!tableFilters?.dateRange?.endDate) {
          items = this.filterByDate(items, tableFilters.dateRange);
        }
        return items;
      }),
      shareReplay({refCount: true, bufferSize: 1})
    );

  tableData$: Observable<MatTableDataSource<PaymentTransaction>> = this.cardData$.pipe(
    map(data => new MatTableDataSource(data))
  );

  transactionsStatusOptions$: Observable<Array<OptionItem<TransactionStatus>>> = this.paymentTransactionData$.pipe(
    map(data => {
      const statusArr = data.items.map(item => item.status);
      const statusSet = new Set(statusArr);
      return Array.from(statusSet).map(item => ({
        value: item,
        label: item
      } as OptionItem<TransactionStatus>));
    })
  );

  paginationConfig$: Observable<PaginationConfig> = this.paymentTransactionData$.pipe(
    map(data => ({
      pageSize: data.pageSize,
      totalNumberOfItems: data.totalNumberOfItems
    }))
  );

  tableDataLoading$: Observable<boolean> = this.store.select(selectors.getPaymentTransactionsDataLoading);

  /** **/

  constructor(
    private store: Store<PaymentTransactionsState>,
    private dateUtils: DateUtilsService
  ) {
    this.store.dispatch(actions.getPaymentTransactions());
  }

  /** Public Methods **/
  tableFilterChange(event: PaymentTransactionTableFilters) {
    this.store.dispatch(actions.getPaymentTransactionsFilteredPage(event));
    this._tableFilters.next(event);
  }

  tablePageChange(event: PageEvent) {
    this.store.dispatch(actions.getPaymentTransactionsPage(event));
  }

  /** Private Methods (Helper Functions) **/
  private filterByStatus(items: Array<PaymentTransaction>, filterValues: Array<TransactionStatus>): Array<PaymentTransaction> {
    return items.filter(item => filterValues.includes(item.status));
  }

  private filterByDate(items: Array<PaymentTransaction>, filterValues: DateRange): Array<PaymentTransaction> {
    return items.filter(item => this.dateUtils.isWithinDateRange(this.dateUtils.convertToDayMonthYear(item.createdAt), filterValues.startDate, filterValues.endDate));
  }
}
