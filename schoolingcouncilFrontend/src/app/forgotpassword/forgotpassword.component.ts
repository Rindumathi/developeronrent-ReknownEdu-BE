import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  email: String;
  constructor(private flashMessage: FlashMessagesService, private _service: UserserviceService, private _router: Router, private _activatedrouter: ActivatedRoute) { }

  ngOnInit() {
  }

  moveToLogin() {
    this._router.navigate(['/login']);
  }

  ForgotpasswordSubmit() {
    const user = {
      email: this.email
    }
    this._service.forgotPassword(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Please check your e-mail for password reset link', { cssClass: 'alert-success', timeout: 5000 });
        console.log('success');
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-success', timeout: 5000 });
        console.log('something went wrong');
      }

    });


  }
}
