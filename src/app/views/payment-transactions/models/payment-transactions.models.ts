/** Enums **/
import { DateRange } from '../../../shared/models/datepicket.models';
import { TRANSACTION_STATUS } from '../constants/payment-transactions.constants';

export type TransactionStatus = typeof TRANSACTION_STATUS[number];

/** Interfaces **/
export interface PaymentTransactionRequest {
  createdAtEnd: string; //YYYY-MM-DD
  createdAtStart: string //YYYY-MM-DD
  page: number;
  size: number;
  status: TransactionStatus | '';
}

export interface PaymentTransactionResponse {
  currentPage: number;
  hasNext: boolean;
  items: Array<PaymentTransaction>;
  numberOfPages: number;
  pageSize: number;
  totalNumberOfItems: number;
};

export interface PaymentTransaction {
  amount: number;
  createdAt: string;
  currency: string;
  description: string;
  id: string;
  status: TransactionStatus;
}

export interface PaymentTransactionTableFilters {
  dateRange: DateRange;
  status: TransactionStatus | '';
}
