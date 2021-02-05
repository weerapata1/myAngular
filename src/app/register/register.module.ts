import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

import { MaterialModule } from '../material/material.module';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
                  RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
    RecaptchaModule, RecaptchaFormsModule
  ],
  providers: [],
  bootstrap: [RegisterComponent]
})
export class RegisterModule { }
