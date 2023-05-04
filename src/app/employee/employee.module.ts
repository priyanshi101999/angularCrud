import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmloyeeListComponent } from './emloyee-list/emloyee-list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmloyeeListComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],

  exports: [EmloyeeListComponent,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormComponent]
})
export class EmployeeModule { }
