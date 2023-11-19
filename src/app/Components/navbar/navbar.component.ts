import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  scrollTo(section: string): void {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      // Calculate the position to scroll to
      const offsetTop = sectionElement.offsetTop - (window.innerHeight * 0.08);
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }
}
