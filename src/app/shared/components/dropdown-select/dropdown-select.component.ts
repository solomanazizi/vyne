import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output
} from '@angular/core';
import { OptionItem } from '../../models/dropdown-select.models';
import { MatSelectChange } from '@angular/material/select';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'vyne-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownSelectComponent),
      multi: true
    },
  ]
})
export class DropdownSelectComponent<T> implements ControlValueAccessor {
  @Input() optionsList: Array<OptionItem<T>>;
  @Input() formControlName: string;
  @Input() label?: string = '';
  @Input() multiSelect?: boolean = false;
  @Output() selectionChange: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();

  // This function will keep reference to a callback passed by `formControl`
  // which takes care of model changes
  onChange: (value: Array<T>) => void;
  onTouched: () => void;

  // Triggered every time it receives incoming value from a `formControl`.
  // Part of the ControlValueAccessor interface required to integrate with Angular.
  writeValue(value: Array<T>) {
    // Set external write value logic to go here
  }

  // Save the reference to the callback fn function passed by `formControl`.
  // We should trigger it every time when the model changes
  registerOnChange(fn: (value: Array<T>) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  onSelectionChange(event: MatSelectChange) {
    this.selectionChange.emit(event.value);
    this.onChange(event.value)
  }
}
