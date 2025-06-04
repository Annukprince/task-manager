import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  userName: string = 'Annu';
  userRole: string = 'Frontend Developer';
  userBio: string = 'I love building clean and user-friendly interfaces!';
  // profileImage: string = 'https://via.placeholder.com/150';
  // profileImage: string = 'https://randomuser.me/api/portraits/lego/1.jpg';
  // profileImage: string = 'assets/me.jpg';
  profileImage = '/me.jpg';




}
