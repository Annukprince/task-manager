import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { CardComponent } from './components/card/card.component';
import { ToggleInfoCardComponent } from './toggle-info-card/toggle-info-card.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WelcomeComponent,ProfileCardComponent,CardComponent,ToggleInfoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';
  name = 'Annu';
  role = 'Frontend Developer';
  bio = 'I love building clean and user-friendly interfaces!';
  image = '/me.jpg';

  tasks = [
    { text: 'Learn Angular', completed: false },
    { text: 'Build a portfolio', completed: true }
  ];

  
  originalRole = 'Frontend Developer';
roles = this.originalRole;

updateRole(newRole: string) {
  this.role = newRole;
}

resetToOriginalRole() {
  this.role = this.originalRole;
}


}




