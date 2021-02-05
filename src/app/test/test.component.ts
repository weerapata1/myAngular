import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';

export interface reCapt {
  recaptchaReactive : string;
}
export interface regisForm {
  username: string;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  SITE_KEY ="6Lf-AUEaAAAAADEHdQwqbACvV-lpM7nn-m77Yqb1";

  constructor(private formBuilder : FormBuilder) { }

  reCapt = this.formBuilder.group({
    recaptchaReactive : [''],
  });
  regisForm = this.formBuilder.group({
    username : [''],
  });

  ngOnInit(): void {
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved response token: ${captchaResponse}`);

  }
  onRegister(){
    console.log("hello");
  }
}
