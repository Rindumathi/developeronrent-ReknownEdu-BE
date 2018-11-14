import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;
  email: String;
  password: String;
  constructor(private flashMessage: FlashMessagesService, private formBuilder: FormBuilder, private _service: UserserviceService, private _router: Router, private _activatedrouter: ActivatedRoute) {
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

  onSavePassword() {
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
      // cnfpassword:this.cnfpassword
    }
    this._service.savepassword(user).subscribe(data => {
      if (data.success) {
        this.messageClass = 'alert alert-success'; // Set a success class
        this.message = data.message; // Set a success message
        console.log('success');
        setTimeout(() => {
          this._router.navigate(['/login']);
        }, 2000);
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-success', timeout: 5000 });
        console.log('something went wrong');
      }
    });
  }
}
