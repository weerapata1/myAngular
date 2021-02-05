import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { ForgetPasswordModule } from './forgetPassword/forget-password.module';
import { RegisterModule} from './register/register.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
RecaptchaModule, RecaptchaFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    UserModule,
    ForgetPasswordModule,
    RegisterModule,
    AppRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
