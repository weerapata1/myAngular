import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPasswordRoutingModule } from './forget-password-routing.module';
import { MaterialModule } from '../material/material.module';

import {ForgetComponent} from './forget/forget.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ChkEmailCodComponent } from './chk-email-cod/chk-email-cod.component';

@NgModule({
  declarations: [
                  ForgetComponent,
                  NewPasswordComponent,
                  ChkEmailCodComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ForgetPasswordRoutingModule
  ]
})
export class ForgetPasswordModule { }
