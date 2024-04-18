import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { actions } from './payment-transactions.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PaymentTransactionsHttpService } from '../services/payment-transactions-http.service';
import { PaymentTransactionResponse } from '../models/payment-transactions.models';

@Injectable()
export class PaymentTransactionsEffects {
  getPaymentTransactions$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getPaymentTransactions),
    switchMap((action) => this.paymentTransactionHttp.getPaymentTransactions(action.requestPayload).pipe(
      map((response: PaymentTransactionResponse) => actions.getPaymentTransactionsSuccess(response)),
      catchError(err => {
        throw err;
        return of(actions.getPaymentTransactionsError({err}));
      })
    ))
  ));

  constructor(
    private actions$: Actions,
    private paymentTransactionHttp: PaymentTransactionsHttpService,
  ) { }
}
