import { TableColumn } from '../../../shared/models/table.models';

export const TABLE_COLUMN_CONFIG: Array<TableColumn> = [
  {
    key: 'id',
    label: 'ID',
    styleClasses: undefined,
    type: 'data',
  },
  {
    key: 'amount',
    label: 'Amount',
    styleClasses: undefined,
    type: 'data',
  },
  {
    key: 'currency',
    label: 'Currency',
    styleClasses: undefined,
    type: 'data',
  },
  {
    key: 'description',
    label: 'Description',
    styleClasses: undefined,
    type: 'data',
  },
  {
    key: 'status',
    label: 'Status',
    styleClasses: [],
    type: 'data',
  },
  {
    key: 'createdAt',
    label: 'Created At',
    styleClasses: undefined,
    type: 'date',
  },
];
