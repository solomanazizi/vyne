import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PaymentTransactionsState } from './payment-transactions.reducer';

export const STORE_KEY = 'payment-transactions';

const getFeatureState = createFeatureSelector<PaymentTransactionsState>(STORE_KEY);

export const selectors = {
  getPaymentTransactionsData: createSelector(getFeatureState, (state: PaymentTransactionsState) => state.paymentTransactions),
  getPaymentTransactionsDataLoading: createSelector(getFeatureState, (state: PaymentTransactionsState) => state.paymentTransactionsLoading),
  getSelectedTransaction: createSelector(getFeatureState, (state: PaymentTransactionsState) => state.selectedTransaction),
  getSelectedTransactionLoading: createSelector(getFeatureState, (state: PaymentTransactionsState) => state.selectedTransactionLoading)
};
