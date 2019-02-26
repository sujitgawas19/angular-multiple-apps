import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { BagRoutingModule } from './bag-routing.module';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { ShippingSummaryComponent } from './shipping-summary/shipping-summary.component';
import { BagViewComponent } from './bag-view/bag-view.component';


@NgModule({
  imports: [
    CommonModule,
    BagRoutingModule,
    FormsModule
    
  ],
  declarations: [ShippingDetailsComponent, 
  				ShippingSummaryComponent, 
  				BagViewComponent
  				]
})
export class BagModule { }
