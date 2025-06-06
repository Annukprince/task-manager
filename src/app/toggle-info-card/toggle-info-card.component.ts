import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-toggle-info-card',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './toggle-info-card.component.html',
  styleUrls: ['./toggle-info-card.component.css']
})
export class ToggleInfoCardComponent {
  showDetails:boolean = false;

  title = 'Angular Learning';
  shortDescription = 'Learn Angular step by step';
  details = 'Today, you will learn directives and event binding. These are essential for building interactive apps.';

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
