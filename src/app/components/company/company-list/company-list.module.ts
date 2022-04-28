import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyListComponent } from './company-list.component'
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CompanyListComponent],
  exports: [CompanyListComponent]
})
export class CompanyListModule { }
