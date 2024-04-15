import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vyne-payment-transaction-main',
  templateUrl: './payment-transaction-main.component.html',
  styleUrls: ['./payment-transaction-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentTransactionMainComponent {}
