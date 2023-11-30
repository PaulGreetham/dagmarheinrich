import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Publication } from '../../Models/publication.model';
import { PublicationsCardComponent } from "../../Components/publications-card/publications-card.component";

@Component({
    selector: 'app-publications',
    standalone: true,
    templateUrl: './publications.component.html',
    styleUrl: './publications.component.scss',
    imports: [CommonModule, PublicationsCardComponent]
})
export class PublicationsComponent {
  publications: Publication[] = [
    {
      title: 'Angular Performance Optimization',
      description: 'An in-depth look at performance tuning in Angular applications.',
      link: 'https://example.com/angular-performance'
    },
    {
      title: 'TypeScript Advanced Patterns',
      description: 'Exploring advanced design patterns in TypeScript for scalable applications.',
      link: 'https://example.com/typescript-patterns'
    },
    {
      title: 'Building Modular Angular Apps',
      description: 'A guide to building modular and maintainable applications using Angular.',
      link: 'https://example.com/modular-angular'
    },
    {
      title: 'Effective Testing Strategies in Angular',
      description: 'Strategies and best practices for testing Angular applications.',
      link: 'https://example.com/angular-testing'
    },
    {
      title: 'RxJS in Angular: Reactive Development',
      description: 'Understanding reactive programming in Angular with RxJS.',
      link: 'https://example.com/rxjs-angular'
    },
    {
      title: 'State Management with NgRx',
      description: 'Comprehensive guide to state management in Angular using NgRx.',
      link: 'https://example.com/ngrx-guide'
    },
    {
      title: 'Angular for Enterprise Applications',
      description: 'Leveraging Angular for building scalable enterprise-grade applications.',
      link: 'https://example.com/angular-enterprise'
    },
    {
      title: 'Migrating to Angular: A Practical Guide',
      description: 'Step-by-step guide to migrating from older frameworks to Angular.',
      link: 'https://example.com/migrating-to-angular'
    }
  ];
}
