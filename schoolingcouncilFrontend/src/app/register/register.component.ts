import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';
import { ValidateserviceService } from '../services/validateservice.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  form: FormGroup;
  message;
  messageClass;

  firstname:String;
  lastname:String;
  email:String;
  password:String;
  constructor(private flashMessage:FlashMessagesService,private formBuilder: FormBuilder,private _validateService:ValidateserviceService,private _service:UserserviceService,private _router:Router,private _activatedrouter:ActivatedRoute) 
  { 
    this.createForm(); 
  }

  createForm()
  {
    this.form = this.formBuilder.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
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

  onRegisterSubmit()
  {
    const user ={
      firstname: this.form.get('firstname').value,
      lastname:this.form.get('lastname').value,
      email: this.form.get('email').value,
      password:this.form.get('password').value
    }
    //required fields
    if(!this._validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields',{cssClass:'alert-danger',timeout:3000});
      return false;
    }

    //validate Email
    if(!this._validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email',{cssClass:'alert-danger',timeout:3000});
      return false;
    }

    //Register User
    this._service.registerUser(user).subscribe(data =>{
      if(data.success)
      {
        this.messageClass = 'alert alert-success'; // Set a success class
        this.message = data.message; // Set a success message
        console.log('Scuccess');
        //this._router.navigate(['/login']);
      }else{
        this.messageClass = 'alert alert-danger'; // Set an error class
        this.message = data.message; // Set an error message
        this.flashMessage.show('Something went wrong',{cssClass:'alert-danger',timeout:3000});
        this._router.navigate(['/register']);
      }
    });

  }
}
