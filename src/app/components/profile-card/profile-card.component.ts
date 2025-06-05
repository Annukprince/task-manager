import { Component, Input,Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../shared/button/button.component';
@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [FormsModule,ButtonComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  @Input() userName: string = 'Annu';
  @Input() userRole: string = 'Frontend Developer';
  @Input() userBio: string = 'I love building clean and user-friendly interfaces!';
  
  @Input() profileImage = '/me.jpg';


  newRole: string = '';

  resetName() {
    this.userName = 'Annu';
  }
  @Output() roleChanged = new EventEmitter<string>();

  // changeRole() {
  //   this.roleChanged.emit('Senior Frontend Developer');
  // }

  changeRole() {
    if (this.newRole.trim()) {
      this.roleChanged.emit(this.newRole);
      this.newRole = ''; // Clear the input after emitting
    }
  }
  
  @Output() resetRequested = new EventEmitter<void>();

resetRole() {
  this.resetRequested.emit();
}



}
