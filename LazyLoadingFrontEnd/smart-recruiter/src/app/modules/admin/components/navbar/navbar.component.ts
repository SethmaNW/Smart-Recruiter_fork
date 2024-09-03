import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private autheService: AuthenticationService, 
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  isLoggedIn(): boolean {
    return this.autheService.getAuthStatus();
  }

  getCurrentUserName(): string {
    return this.autheService.getCurrentUserName();
  }

  logout(): void {
    this.autheService.logOut();
    console.log("logout");
    this.router.navigate(['/auth/login']).then(() => {
      // console.log("navigated");
      this.cdr.detectChanges();
    });
    
  }
}