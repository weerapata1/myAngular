import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chk-email-cod',
  templateUrl: './chk-email-cod.component.html',
  styleUrls: ['./chk-email-cod.component.css']
})
export class ChkEmailCodComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onContinue(){
//       if code true route to newpassword
      this.router.navigate(['/newPassword']);
  }

}
