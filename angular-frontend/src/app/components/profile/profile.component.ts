import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  constructor(public authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(data=>{
      if(data.success){
        this.user = data.user;
      }
      console.log(data)
    })
  }
}
