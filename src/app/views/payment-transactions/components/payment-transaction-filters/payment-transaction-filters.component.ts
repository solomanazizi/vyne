import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  @Input() statusOptions!: Array<OptionItem<TransactionStatus>>;
  @Output() filterChange: EventEmitter<PaymentTransactionTableFilters> = new EventEmitter<PaymentTransactionTableFilters>();

  filterForm: FormGroup = this.fb.group(
    {
      dateRange: [{startDate: '', endDate: ''}],
      status: ['']
    }
  );

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.filterForm.valueChanges.pipe().subscribe(
      filterValues => {
        this.filterChange.emit(filterValues);
      }
    );
  }
}
