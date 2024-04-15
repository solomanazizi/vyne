import { ChangeDetectionStrategy, Component, } from '@angular/core';
import {
  PaymentTransaction, PaymentTransactionTableFilters,
  TransactionStatus
} from '../../models/payment-transactions.models';
import { Observable } from 'rxjs';
import { PaymentTransactionsTableService } from '../../services/payment-transactions-table.service';
import { PaginationConfig, TableColumn } from '../../../../shared/models/table.models';
import { MatTableDataSource } from '@angular/material/table';
import { OptionItem } from '../../../../shared/models/dropdown-select.models';
import { TABLE_COLUMN_CONFIG } from '../../constants/payment-transactions.constants';
import { DateUtilsService } from '../../../../shared/services/date-utils/date-utils.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'vyne-payment-transaction-table',
  templateUrl: './payment-transaction-table.component.html',
  styleUrls: ['./payment-transaction-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentTransactionTableComponent {
  tableColumns: Array<TableColumn> = TABLE_COLUMN_CONFIG;
  tableData$: Observable<MatTableDataSource<PaymentTransaction>> = this.tableService.tableData$;
  cardData$: Observable<Array<PaymentTransaction>> = this.tableService.cardData$;
  transactionStatusOptions$: Observable<Array<OptionItem<TransactionStatus>>> = this.tableService.transactionsStatusOptions$;
  paginationConfig$: Observable<PaginationConfig> = this.tableService.paginationConfig$;

  constructor(
    private tableService: PaymentTransactionsTableService,
    private dateUtils: DateUtilsService
  ) {}

  getColumnKeyValue(row: PaymentTransaction, column: TableColumn) {
    const rowValue = row[column.key as keyof PaymentTransaction];
    return column.type === 'date' ?
      this.dateUtils.convertToDayMonthYear(rowValue as string) :
      rowValue;
  }

  onTablePageChange(event: PageEvent) {
    this.tableService.tablePageChange(event);
  }

  onTableFilterChange(event: PaymentTransactionTableFilters) {
    this.tableService.tableFilterChange(event);
  }

  hasCardData(cardData: Array<PaymentTransaction> | null): boolean {
    return !!cardData?.length;
  }
}
