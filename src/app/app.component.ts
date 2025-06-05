import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WelcomeComponent,ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';
  name = 'Annu';
  role = 'Frontend Developer';
  bio = 'I love building clean and user-friendly interfaces!';
  image = '/me.jpg';

  
  originalRole = 'Frontend Developer';
roles = this.originalRole;

updateRole(newRole: string) {
  this.role = newRole;
}

resetToOriginalRole() {
  this.role = this.originalRole;
}


}
