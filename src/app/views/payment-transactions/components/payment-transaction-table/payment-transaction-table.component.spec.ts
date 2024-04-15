import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentTransactionTableComponent } from './payment-transaction-table.component';
import { PaymentTransactionsTableService } from '../../services/payment-transactions-table.service';
import { DateUtilsService } from '../../../../shared/services/date-utils/date-utils.service';
import { DatepickerModule } from '../../../../shared/components/datepicker/datepicker.module';
import { CardModule } from '../../../../shared/components/card/card.module';
import {
  DropdownSelectModule
} from '../../../../shared/components/dropdown-select/dropdown-select.module';
import { TableModule } from '../../../../shared/components/table/table.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentTransactionsModule } from '../../payment-transactions.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PaymentTransactionTableComponent', () => {
  let component: PaymentTransactionTableComponent;
  let fixture: ComponentFixture<PaymentTransactionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentTransactionTableComponent],
      providers: [
        {
          provide: PaymentTransactionsTableService,
          useValue: {}
        },
        {
          provide: DateUtilsService,
          useValue: {}
        }
      ],
      imports: [
        DatepickerModule,
        CardModule,
        DropdownSelectModule,
        TableModule,
        PaymentTransactionsModule,
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        HttpClientTestingModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PaymentTransactionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
