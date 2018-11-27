import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;

  email:String;
  password:String;
  constructor(private formBuilder: FormBuilder,private _service:UserserviceService,private _router:Router,private _activatedrouter:ActivatedRoute) 
  { 
    this.createForm(); 
  }
  createForm()
  {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required]],
      password:[null, [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onLoginSubmit()
  {
    const user = {
      email: this.form.get('email').value,
      password:this.form.get('password').value
    }

    this._service.authenticateUser(user).subscribe(data =>{
      if(data.success)
      {
        this.messageClass = 'alert alert-success'; // Set a success class
        this.message = data.message; // Set a success message
        this._service.storeUserData(data.token, data.user);
        this._router.navigate(['profile']);
        console.log('user loggedIn')
      }else
      {
        this.messageClass = 'alert alert-danger'; // Set an error class
        this.message = data.message; // Set an error message
        //this.flashMessage.show(data.msg,{
         // cssClass:'alert-danger',
          //timeout: 5000});
          this._router.navigate(['login']);
      }
    }); 
  }
}
