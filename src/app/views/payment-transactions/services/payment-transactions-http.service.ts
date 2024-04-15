import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PAYMENT_TRANSACTIONS_URL } from '../../../shared/constants/api-urls.constants';
import { PaymentTransactionResponse } from '../models/payment-transactions.models';

@Injectable()
export class PaymentTransactionsHttpService {
  constructor(private http: HttpClient) { }

  getPaymentTransactions(): Observable<PaymentTransactionResponse> {
    return this.http.get<PaymentTransactionResponse>(PAYMENT_TRANSACTIONS_URL, {withCredentials: true});
  }
}
