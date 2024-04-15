import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Output
} from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DateRange } from '../../models/datepicket.models';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const appDateFormat = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'vyne-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: appDateFormat,
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    },
  ],
})
export class DatepickerComponent implements ControlValueAccessor {
  @Output() dateRangeChange: EventEmitter<DateRange> = new EventEmitter<DateRange>();

  // This function will keep reference to a callback passed by `formControl`
  // which takes care of model changes
  onChange: (value: DateRange) => void;
  onTouched: () => void;

  // Triggered every time it receives incoming value from a `formControl`.
  // Part of the ControlValueAccessor interface required to integrate with Angular.
  writeValue(value: DateRange) {
    // Set external write value logic to go here
  }

  // Save the reference to the callback fn function passed by `formControl`.
  // We should trigger it every time when the model changes
  registerOnChange(fn: (value: DateRange) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  onDateChange(startDate: HTMLInputElement, endDate: HTMLInputElement) {
    const value = {
      startDate: startDate.value,
      endDate: endDate.value
    };

    this.dateRangeChange.emit(value);
    this.onChange(value);
  }
}
