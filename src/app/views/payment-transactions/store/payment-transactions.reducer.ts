import { actions } from './payment-transactions.actions';
import { createReducer, on } from '@ngrx/store';
import {
  PaymentTransaction,
  PaymentTransactionResponse
} from '../models/payment-transactions.models';

export interface PaymentTransactionsState {
  paymentTransactions: PaymentTransactionResponse;
  paymentTransactionsLoading: boolean;
  selectedTransaction: PaymentTransaction;
  selectedTransactionLoading: boolean;
}

export const initialState: PaymentTransactionsState = {
  paymentTransactions: {} as PaymentTransactionResponse,
  paymentTransactionsLoading: false,
  selectedTransaction: {} as PaymentTransaction,
  selectedTransactionLoading: false
};

export const reducer = createReducer(
  initialState,
  on(actions.getPaymentTransactions, (state: PaymentTransactionsState) => ({
    ...state,
    paymentTransactionsLoading: true
  })),
  on(actions.getPaymentTransactionsSuccess, (state: PaymentTransactionsState, response) => ({
    ...state,
    paymentTransactions: response,
    paymentTransactionsLoading: false
  })),
  on(actions.getPaymentTransactionsError, (state: PaymentTransactionsState) => ({
    ...state,
    paymentTransactionsLoading: false
  }))
);
