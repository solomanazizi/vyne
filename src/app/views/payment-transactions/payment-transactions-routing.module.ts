import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  PaymentTransactionTableComponent
} from './components/payment-transaction-table/payment-transaction-table.component';
import {
  PaymentTransactionMainComponent
} from './components/payment-transaction-main/payment-transaction-main.component';
import {
  PaymentTransactionDetailsComponent
} from './components/payment-transaction-details/payment-transaction-details.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentTransactionMainComponent,
    children: [
      {
        path: '',
        component: PaymentTransactionTableComponent,
      },
      {
        path: 'details/:id',
        component: PaymentTransactionDetailsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentTransactionsRoutingModule {}
