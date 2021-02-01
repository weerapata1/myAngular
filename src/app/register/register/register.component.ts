import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reCaptchaKeyPub = "Pub Key";

  constructor(private router : Router)  { }

  ngOnInit(): void {
  }
  onRegister(){
    console.log('this register');
  }
  //   resolved(captchaResponse: string, res) { finally
    resolved(captchaResponse: string) {
      console.log(`Resolved response token: ${captchaResponse}`);

    }

}
