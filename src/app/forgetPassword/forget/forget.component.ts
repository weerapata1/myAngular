import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup } from '@angular/forms';

import {Forget } from './forget';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  disabled = false;
  reCaptchaKeyPub = "6Lf-AUEaAAAAADEHdQwqbACvV-lpM7nn-m77Yqb1";

  reCapt = this.formBuilder.group({

    recaptchaReactive : [''],
  });
  reQui = this.formBuilder.group({
    email : [''],
  });
  constructor(private router : Router , private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }
//   resolved(captchaResponse: string, res) { finally
  resolved(captchaResponse: string) {
//     console.log(`Resolved response token: ${captchaResponse}`);
    return this.disabled = true;
  }

  onContinue(){
    console.log("hello");
    console.log(this.reQui.value);
    setTimeout(() => this.router.navigate(['/checkPassword']),1000);
  }

}
