import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {
  constructor() { }

  isWithinDateRange(date: string, startDate: string, endDate: string): boolean {
    return date >= startDate && date <= endDate;
  }

  convertToDayMonthYear(date: string): string {
    return moment(date).format('DD/MM/YYYY');
  }
}
