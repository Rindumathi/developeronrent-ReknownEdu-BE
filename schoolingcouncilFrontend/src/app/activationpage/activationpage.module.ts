import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivationpageRoutingModule } from './activationpage-routing.module';
import { ActivationpageComponent } from './activationpage.component';

@NgModule({
  declarations: [ActivationpageComponent],
  imports: [
    CommonModule,
    ActivationpageRoutingModule
  ]
})
export class ActivationpageModule { }
