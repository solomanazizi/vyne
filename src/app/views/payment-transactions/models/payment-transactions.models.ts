/** Enums **/
import { DateRange } from '../../../shared/models/datepicket.models';

export type TransactionStatus =
  'CREATED' |
  'FAILED' |
  'SETTLED' |
  'COMPLETED' |
  'CAPTURED';


/** Interfaces **/
export interface PaymentTransactionRequest {
  currentPage: number;
  pageSize: number;
  filters: any; //Needs to be changed to a more readable filter interface
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
  status: Array<TransactionStatus>;
}
