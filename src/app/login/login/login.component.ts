import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//   loginFormControl = new FormControl('', [
//     Validators.required,
//     Validators.email,
//   ]);
  constructor() { }

  ngOnInit(): void {
  }
  onLogin(){
    console.log("this Login");
  }

}
