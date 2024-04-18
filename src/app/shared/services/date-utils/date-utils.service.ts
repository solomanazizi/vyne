import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {
  constructor() { }

  convertToDayMonthYear(date: string): string {
    return moment(date).format('DD/MM/YYYY');
  }
}
