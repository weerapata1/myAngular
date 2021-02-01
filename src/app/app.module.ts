import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { ForgetPasswordModule } from './forgetPassword/forget-password.module';
import { RegisterModule} from './register/register.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    UserModule,
    MaterialModule,
    ForgetPasswordModule,
    RegisterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
