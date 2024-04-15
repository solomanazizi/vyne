import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Payment transaction view is the default page, but this can be changed/expanded to other entry components/views
  {
    path: 'payment-transactions',
    loadChildren: () => import('./views/payment-transactions/payment-transactions.module').then(m => m.PaymentTransactionsModule)
  },
  {
    path: '**',
    redirectTo: 'payment-transactions',
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
