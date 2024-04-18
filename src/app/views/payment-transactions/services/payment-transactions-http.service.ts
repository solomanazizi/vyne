import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PAYMENT_TRANSACTIONS_URL } from '../../../shared/constants/api-urls.constants';
import {
  PaymentTransactionRequest,
  PaymentTransactionResponse
} from '../models/payment-transactions.models';

@Injectable()
export class PaymentTransactionsHttpService {
  constructor(private http: HttpClient) { }

  getPaymentTransactions(reqParams: PaymentTransactionRequest): Observable<PaymentTransactionResponse> {
    let params = this.addHttpParams(reqParams);

    return this.http.get<PaymentTransactionResponse>(PAYMENT_TRANSACTIONS_URL, {
      params: params,
      withCredentials: true
    });
  }

  private addHttpParams(reqParams: PaymentTransactionRequest): HttpParams {
    let params = new HttpParams();

    if (!!Object.keys(reqParams).length) {
      params = params.append('page', reqParams.page);
      params = params.append('size', reqParams.size);

      if (reqParams.createdAtStart !== '' && reqParams.createdAtEnd !== '') {
        params = params.append('createdAtEnd', reqParams.createdAtEnd);
        params = params.append('createdAtStart', reqParams.createdAtStart);
      }

      if (reqParams.status !== '') {
        params = params.append('status', reqParams.status);
      }
    }

    return params;
  }
}
