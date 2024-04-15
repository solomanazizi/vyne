import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentTransactionsRoutingModule } from './payment-transactions-routing.module';
import {
  PaymentTransactionMainComponent
} from './components/payment-transaction-main/payment-transaction-main.component';
import {
  PaymentTransactionTableComponent
} from './components/payment-transaction-table/payment-transaction-table.component';
import {
  PaymentTransactionDetailsComponent
} from './components/payment-transaction-details/payment-transaction-details.component';
import { PaymentTransactionsHttpService } from './services/payment-transactions-http.service';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/payment-transactions.reducer';
import { PaymentTransactionsEffects } from './store/payment-transactions.effects';
import { EffectsModule } from '@ngrx/effects';
import { TableModule } from '../../shared/components/table/table.module';
import { PaymentTransactionsTableService } from './services/payment-transactions-table.service';
import { DatepickerModule } from '../../shared/components/datepicker/datepicker.module';
import {
  DropdownSelectModule
} from '../../shared/components/dropdown-select/dropdown-select.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from '../../shared/components/card/card.module';
import {
  PaymentTransactionFiltersComponent
} from './components/payment-transaction-filters/payment-transaction-filters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    PaymentTransactionMainComponent,
    PaymentTransactionTableComponent,
    PaymentTransactionDetailsComponent,
    PaymentTransactionFiltersComponent
  ],
  providers: [
    PaymentTransactionsHttpService,
    PaymentTransactionsTableService,
  ],
  imports: [
    CommonModule,
    PaymentTransactionsRoutingModule,
    StoreModule.forFeature('payment-transactions', reducer),
    EffectsModule.forFeature([PaymentTransactionsEffects]),
    TableModule,
    DatepickerModule,
    DropdownSelectModule,
    FlexLayoutModule,
    CardModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ]
})
export class PaymentTransactionsModule {}
