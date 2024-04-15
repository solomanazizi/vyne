export type TableColumnType = 'data' | 'date';

export interface TableColumn {
  key: string;
  label: string;
  styleClasses?: Array<string>;
  type: TableColumnType;
}

export interface PaginationConfig {
  pageSize: number;
  totalNumberOfItems: number;
}
