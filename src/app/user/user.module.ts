import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule
  ],
})
export class UserModule { }
