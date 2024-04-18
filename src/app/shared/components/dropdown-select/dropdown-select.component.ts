import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  OnChanges,
  SimpleChanges
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
export class DropdownSelectComponent<T> implements OnChanges, ControlValueAccessor {
  @Input() optionsList!: Array<OptionItem<T | null>>;
  @Input() formControlName: string;
  @Input() label?: string = '';
  @Input() multiSelect?: boolean = false;
  @Input() resetOption?: boolean = true;
  @Output() selectionChangeMulti: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  @Output() selectionChangeSingle: EventEmitter<string> = new EventEmitter<string>();

  // This function will keep reference to a callback passed by `formControl`
  // which takes care of model changes
  onChange: (value: Array<T> | T) => void;
  onTouched: () => void;

  // Triggered every time it receives incoming value from a `formControl`.
  // Part of the ControlValueAccessor interface required to integrate with Angular.
  writeValue(value: Array<T>) {
    // Set external write value logic to go here
  }

  // Save the reference to the callback fn function passed by `formControl`.
  // We should trigger it every time when the model changes
  registerOnChange(fn: (value: Array<T> | T) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  ngOnChanges(changes: SimpleChanges) {
    //Add reset option for dropdown for single select
    if(changes.hasOwnProperty('optionsList') && this.resetOption && !this.multiSelect) {
      this.optionsList = [
        {
          label: '-',
          value: null
        },
        ...this.optionsList
      ]
    }
  }

  onSelectionChange(event: MatSelectChange) {
    if(Array.isArray(event.value)) {
      this.selectionChangeMulti.emit(event.value);
    } else {
      this.selectionChangeSingle.emit(event.value);
    }

    this.onChange(event.value);
  }
}
