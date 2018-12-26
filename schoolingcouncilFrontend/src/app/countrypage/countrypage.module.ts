import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountrypageRoutingModule } from './countrypage-routing.module';
import { CountrypageComponent } from './countrypage.component';

@NgModule({
  imports: [
    CommonModule,
    CountrypageRoutingModule
  ],
  declarations: [CountrypageComponent]
})
export class CountrypageModule { }
