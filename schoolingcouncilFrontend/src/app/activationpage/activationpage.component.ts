import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-activationpage',
  templateUrl: './activationpage.component.html',
  styleUrls: ['./activationpage.component.css']
})
export class ActivationpageComponent implements OnInit {

  message;
  messageClass;
  constructor(private _service:UserserviceService,private _router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.activate(this.route.snapshot.params['token']);
  }

  activate(token)
  {
    this._service.activate(token).subscribe(data=>{
      if(data.success)
        {
          console.log('success');
          this.messageClass = 'alert alert-success'; // Set a success class
          this.message = data.message; // Set a success message
          setTimeout(()=>{
            this._router.navigate(['/login']);
          },4000);
        }else{
          console.log('fail');
          this.messageClass = 'alert alert-danger'; // Set an error class
          this.message = data.message; // Set an error message
        }
    });
  
  }

}
