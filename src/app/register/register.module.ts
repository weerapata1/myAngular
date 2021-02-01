import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
