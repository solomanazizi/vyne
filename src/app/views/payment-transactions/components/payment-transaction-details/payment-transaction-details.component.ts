import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vyne-payment-transaction-details',
  templateUrl: './payment-transaction-details.component.html',
  styleUrls: ['./payment-transaction-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentTransactionDetailsComponent {
//Todo add a details page to display on transaction click
}
