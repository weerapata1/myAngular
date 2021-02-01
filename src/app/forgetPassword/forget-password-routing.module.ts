import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForgetComponent} from './forget/forget.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ChkEmailCodComponent } from './chk-email-cod/chk-email-cod.component';

const routes: Routes = [
                          {path: 'forgetPassword', component : ForgetComponent},
                          {path: 'newPassword', component : NewPasswordComponent},
                          {path: 'checkPassword', component : ChkEmailCodComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetPasswordRoutingModule { }
