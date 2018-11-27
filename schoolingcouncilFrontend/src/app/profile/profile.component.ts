import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user: Object;
  constructor(private _service: UserserviceService, private _router: Router, private _activatedrouter: ActivatedRoute) { }

  ngOnInit() {
    this._service.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
      err => {
        console.log(err);
        return false;
      });
  }
  onLogoutClick() {
    this._service.logout();
    this._router.navigate(['login']);
    return false;
  }

  onPersonalinfo(id)
  {
    this._service.personalinfo(id,this.user).subscribe(data=>{
      let id = data['_id'];
      this._router.navigate(['/profile',id]);
      (err)=>{
        console.log(err);
      }
    });
  }

}
