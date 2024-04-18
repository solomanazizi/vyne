import { createAction, props } from '@ngrx/store';
import {
  PaymentTransactionRequest,
  PaymentTransactionResponse,
} from '../models/payment-transactions.models';

const prefix = '[Payment-Transactions]';

export const actions = {
  getPaymentTransactions: createAction(`${prefix} GET_PAYMENT_TRANSACTIONS`, props<{ requestPayload: PaymentTransactionRequest }>()),
  getPaymentTransactionsSuccess: createAction(`${prefix} GET_PAYMENT_TRANSACTIONS_SUCCESS`, props<PaymentTransactionResponse>()),
  getPaymentTransactionsError: createAction(`${prefix} GET_PAYMENT_TRANSACTIONS_ERROR`, props<{ err: any }>()),
};
