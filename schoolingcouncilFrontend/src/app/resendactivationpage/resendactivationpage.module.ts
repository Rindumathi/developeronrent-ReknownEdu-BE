import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResendactivationpageRoutingModule } from './resendactivationpage-routing.module';
import { ResendactivationpageComponent } from './resendactivationpage.component';

@NgModule({
  declarations: [ResendactivationpageComponent],
  imports: [
    CommonModule,
    ResendactivationpageRoutingModule
  ]
})
export class ResendactivationpageModule { }
