import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaymentTransactionsTableService } from '../../services/payment-transactions-table.service';
import { Observable } from 'rxjs';
import { OptionItem } from '../../../../shared/models/dropdown-select.models';
import {
  PaymentTransactionTableFilters,
  TransactionStatus
} from '../../models/payment-transactions.models';

@Component({
  selector: 'vyne-payment-transaction-filters',
  templateUrl: './payment-transaction-filters.component.html',
  styleUrls: ['./payment-transaction-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentTransactionFiltersComponent implements OnInit {
  @Output() filterChange: EventEmitter<PaymentTransactionTableFilters> = new EventEmitter<PaymentTransactionTableFilters>();

  transactionStatusOptions$: Observable<Array<OptionItem<TransactionStatus>>> = this.tableService.transactionsStatusOptions$;

  filterForm: FormGroup = this.fb.group(
    {
      dateRange: [{}],
      status: [[]]
    }
  );

  constructor(
    private fb: FormBuilder,
    private tableService: PaymentTransactionsTableService,
  ) {}

  ngOnInit() {
    this.filterForm.valueChanges.pipe().subscribe(
      filterValues => {
        this.filterChange.emit(filterValues);
      }
    );
  }
}
