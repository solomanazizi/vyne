import { createAction, props } from '@ngrx/store';
import {
  PaymentTransactionResponse,
  PaymentTransactionTableFilters
} from '../models/payment-transactions.models';
import { PageEvent } from '@angular/material/paginator';

const prefix = '[Payment-Transactions]';

export const actions = {
  getPaymentTransactions: createAction(`${prefix} GET_PAYMENT_TRANSACTIONS`),
  getPaymentTransactionsSuccess: createAction(`${prefix} GET_PAYMENT_TRANSACTIONS_SUCCESS`, props<PaymentTransactionResponse>()),
  getPaymentTransactionsError: createAction(`${prefix} GET_PAYMENT_TRANSACTIONS_ERROR`, props<{ err: any }>()),

  //Example of actions to be called to get a new page on pagination events
  getPaymentTransactionsPage: createAction(`${prefix} GET_PAYMENT_TRANSACTIONS_PAGE`, props<PageEvent>()),
  getPaymentTransactionsPageSuccess: createAction(`${prefix} GET_PAYMENT_TRANSACTIONS_PAGE_SUCCESS`, props<PaymentTransactionResponse>()),
  getPaymentTransactionsPageError: createAction(`${prefix} GET_PAYMENT_TRANSACTIONS_PAGE_ERROR`, props<{ err: any }>()),

  //Example of actions to be called to get new page on filter events
  getPaymentTransactionsFilteredPage: createAction(`${prefix} GET_PAYMENT_TRANSACTIONS_FILTERED_PAGE`, props<PaymentTransactionTableFilters>()),
  getPaymentTransactionsFilteredPageSuccess: createAction(`${prefix} GET_PAYMENT_TRANSACTIONS_SUCCESS_FILTERED_PAGE`, props<PaymentTransactionResponse>()),
  getPaymentTransactionsFilteredPageError: createAction(`${prefix} GET_PAYMENT_TRANSACTIONS__FILTERED_PAGE_ERROR`, props<{ err: any }>()),
};
