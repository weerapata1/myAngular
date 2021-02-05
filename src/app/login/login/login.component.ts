import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {FormBuilder, FormGroup } from '@angular/forms';

import {Login} from './login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = this.formBuilder.group({
              username : [''],
              password : ['']
  });
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }
  onLogin(){
    console.log("this Login");
    console.log(this.loginForm.value);
  }


}
