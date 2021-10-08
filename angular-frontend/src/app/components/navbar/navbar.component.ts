import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { FlashMessagesService } from 'flash-messages-angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:any
  constructor(
    public authService:AuthService,
    private router:Router,
    private flashmessages:FlashMessagesService,
    private socialAuthService: SocialAuthService,
  ) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(data=>{
      if(data.success){
        this.user = data.user
      }
    })
  }

  onLogout(){
    this.authService.logout();
    this.flashmessages.show("You logged Out",{cssClass:'alert-success',timeout:5000})
    this.router.navigate(['register'])
    return false
  }

  currentUserProfile(){
    this.router.navigate(['profile',this.user._id])
  }
}
