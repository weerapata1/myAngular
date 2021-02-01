import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  res = '';
  reCaptchaKeyPub = "PublicKey";
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
//   resolved(captchaResponse: string, res) { finally
  resolved(captchaResponse: string) {
    console.log(`Resolved response token: ${captchaResponse}`);

  }
  onContinue(){
//     send confirm code to Email
  setTimeout(() => this.router.navigate(['/checkPassword']),1000);

  }

}
