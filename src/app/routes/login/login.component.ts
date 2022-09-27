import { Component } from '@angular/core';
import { AuthData } from 'src/models/authentication.model';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-authpage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoading: boolean = false;
  authenticationInfo: AuthData = {
    email: '',
    password: '',
  };

  constructor(private AuthService: AuthService) {}

  userLogin = () => {
    this.isLoading = true;
    this.AuthService.userLogin(this.authenticationInfo).subscribe({
      next: () => {
        setTimeout(() => {
          this.isLoading = false;
        }, 5000);
      },
    });
  };
}
