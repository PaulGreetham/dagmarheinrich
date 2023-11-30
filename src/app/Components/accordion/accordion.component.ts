import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() accordionItems: {
    id: number,
    employer: string,
    title: string,
    date: string,
    content: string
  }[] = [];
  openSection: string | null = null;

  toggleSection(sectionId: string) {
    this.openSection = (this.openSection === sectionId) ? null : sectionId;
  }
}
