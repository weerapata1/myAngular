import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {FormBuilder, FormGroup } from '@angular/forms';

import {Register} from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  disabled = false;
  reCaptchaKeyPub = "6Lf-AUEaAAAAADEHdQwqbACvV-lpM7nn-m77Yqb1";

  constructor(private router : Router ,private formBuilder : FormBuilder)  { }

  ngOnInit(): void {
  }
  onRegister(){
    console.log('this register');
    console.log(this.disabled);
    console.log(this.regisForm.value);
  }
  //   resolved(captchaResponse: string, res) { finally
    resolved(captchaResponse: string) {
      console.log(`Resolved response token: ${captchaResponse}`);
      return this.disabled = true;
    }
    regisForm = this.formBuilder.group({
      username :['',[Validators.required]],
      password :[''],
      rePass :[''],
      email :[''],
      recaptchaReactive : ['']

    });

}
