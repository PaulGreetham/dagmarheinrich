import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activeSection: string = 'home';

  scrollTo(section: string): void {
    this.activeSection = section;
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      const offsetTop = sectionElement.offsetTop - (window.innerHeight * 0.08);
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }
}
