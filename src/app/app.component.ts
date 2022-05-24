import { Component } from '@angular/core';
import { Role } from './models/role.model';
import { UserDetails } from './pages/authentication/models/user-details.model';
import { AuthenticationService } from './pages/authentication/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Agenda-Arquivos';
  Role = Role;
  currentUser: UserDetails;

  constructor(private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
}

logout() {
    this.authService.logout();
}
}


