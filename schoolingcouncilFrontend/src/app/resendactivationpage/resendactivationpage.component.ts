import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-resendactivationpage',
  templateUrl: './resendactivationpage.component.html',
  styleUrls: ['./resendactivationpage.component.css']
})
export class ResendactivationpageComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;
  email: String;
  password: String;
  constructor(private formBuilder: FormBuilder, private _service: UserserviceService, private _router: Router, private _activatedrouter: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required]],
      // Password Input
      password: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(8), // Minimum length is 8 characters
        Validators.maxLength(35), // Maximum length is 35 characters
        // this.validatePassword // Custom validation
      ])],
    })
  }
  ngOnInit() {
  }
  moveToLogin() {
    this._router.navigate(['/login']);
  }
  onResendactivationlink() {
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
      // cnfpassword:this.cnfpassword
    }
    this._service.resend(user).subscribe(data => {
      if (data.success) {
        this.messageClass = 'alert alert-success'; // Set a success class
        this.message = data.message; // Set a success message
        console.log('success');
        setTimeout(() => {
          this._router.navigate(['/login']);
        }, 2000);
      } else {
        this.messageClass = 'alert alert-danger'; // Set a success class
        this.message = data.message; // Set a success message
      }
    });
  }

}
