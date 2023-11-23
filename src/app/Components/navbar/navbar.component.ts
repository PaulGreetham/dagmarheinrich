import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activeSection: string = '/';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const sections = ['home', 'awards', 'experience', 'education', 'publications', 'contact'];
    const currentScrollPosition = window.pageYOffset + (window.innerHeight * 0.081);

    sections.forEach(section => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionTop + sectionHeight) {
          this.activeSection = section;
        }
      }
    });
  }

  scrollTo(section: string): void {
    this.activeSection = section;
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      const offsetTop = sectionElement.offsetTop - (window.innerHeight * 0.079);
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }
}
