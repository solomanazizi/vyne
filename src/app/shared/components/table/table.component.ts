import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationConfig, TableColumn, TableColumnType } from '../../models/table.models';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DateUtilsService } from '../../services/date-utils/date-utils.service';

@Component({
  selector: 'vyne-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> implements OnChanges {
  @Input() dataSource!: MatTableDataSource<T>;
  @Input() columns!: Array<TableColumn>;
  @Input() paginationConfig?: PaginationConfig;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Output() tablePageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  constructor(private dateUtils: DateUtilsService) {}

  ngOnChanges(changes: SimpleChanges) {
    if(changes.hasOwnProperty('dataSource') && !changes['dataSource'].firstChange) {
      if(!this.dataSource?.data?.length){
        throw {
          type: 'warn',
          message: 'No valid data for table, please check server response and table filters.'
        }
      }
    }
  }

  getColumnKeys(): Array<string> {
    return !!this.columns?.length ? this.columns.map(column => column.key) : [];
  }

  onPageChange(event: PageEvent) {
    this.tablePageChange.emit(event);
  }

  getFormattedValue<T>(value: T, type: TableColumnType): T | string {
    //Use of switch case for future values that need custom formatting
    switch (type) {
      case 'date':
        return this.dateUtils.convertToDayMonthYear(value as string);
      default:
        return value;
    }
  }
}
