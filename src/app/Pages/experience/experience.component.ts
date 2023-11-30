import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../../Components/accordion/accordion.component';

@Component({
    selector: 'app-experience',
    standalone: true,
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss',
    imports: [CommonModule, AccordionComponent]
})
export class ExperienceComponent {
  experienceAccordionItems = [
    { id: 1, employer: 'University of Salford', title: 'Senior Research Fellow', date: 'April 2020 - Present', content: 'Content 1 here' },
    { id: 2, employer: 'Manchester Metropolitan University ', title: 'Research Impact Associate', date: 'May 2019 - April 2020', content: 'Content here' },
    { id: 3, employer: 'University of Huddersfiled', title: 'Research Feelow & Consultant', date: 'April 2015 - October 2018', content: 'Content here' },
    { id: 4, employer: 'University College London', title: 'Postgraduate Teaching Assistant', date: 'September 2014 - May 2015', content: 'Content here' },
  ];
}
