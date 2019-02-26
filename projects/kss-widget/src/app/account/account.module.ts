import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account/account.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { MyAddressesComponent } from './my-addresses/my-addresses.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [
  	AccountComponent, 
  	MyOrdersComponent, 
  	OrderDetailsComponent,
  	MyAddressesComponent,
  	MyProfileComponent
  ],
  providers: [
  ]
})
export class AccountModule { }
