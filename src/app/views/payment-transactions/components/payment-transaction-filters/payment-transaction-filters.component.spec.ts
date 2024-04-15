import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentTransactionFiltersComponent } from './payment-transaction-filters.component';
import { PaymentTransactionsTableService } from '../../services/payment-transactions-table.service';
import {
  DropdownSelectModule
} from '../../../../shared/components/dropdown-select/dropdown-select.module';
import { DatepickerModule } from '../../../../shared/components/datepicker/datepicker.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PaymentTransactionFiltersComponent', () => {
  let component: PaymentTransactionFiltersComponent;
  let fixture: ComponentFixture<PaymentTransactionFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTransactionFiltersComponent ],
      providers: [
        {
          provide: PaymentTransactionsTableService,
          useValue: {}
        }
      ],
      imports: [
        DropdownSelectModule,
        DatepickerModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentTransactionFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
