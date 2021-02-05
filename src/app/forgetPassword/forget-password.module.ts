import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RecaptchaModule ,RecaptchaFormsModule  } from 'ng-recaptcha';

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
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    ReactiveFormsModule,
    ForgetPasswordRoutingModule
  ],
//   providers: [{provide: RECAPTCHA_LANGUAGE, useValue: 'de'}]
})
export class ForgetPasswordModule { }
