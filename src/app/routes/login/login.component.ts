import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthData } from 'src/models/authentication.model';
import { AuthService } from 'src/services/auth.service';
@Component({
  selector: 'app-authpage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  toggle: boolean = false;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  authenticationInfo: AuthData = {
    email: '',
    password: '',
  };
  errorMsg: string = '';
  constructor(private AuthService: AuthService) {}

  toggleBtn = () => {
    this.toggle = !this.toggle;
  };

  userLogin = () => {
    this.errorMsg = '';

    this.isLoading$.next(true);
    this.AuthService.userLogin(this.authenticationInfo).subscribe({
      next: () => {
        setTimeout(() => {
          this.isLoading$.next(false);
        }, 2000);
      },
      error: (error) => {
        setTimeout(() => {
          this.errorMsg = error.message;
          this.isLoading$.next(false);
        }, 2000);
      },
    });
  };
}
