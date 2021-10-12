import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { FlashMessagesService } from 'flash-messages-angular';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-frontend';
  user: any;
  constructor(
    public authService: AuthService,
    private router: Router,
    private flashmessages: FlashMessagesService,
    private socialAuthService: SocialAuthService
  ) {}
  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((data) => {
      if (data.success) {
        this.user = data.user;
      }
    });
  }
}
