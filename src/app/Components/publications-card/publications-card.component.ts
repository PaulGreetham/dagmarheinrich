import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Publication } from '../../Models/publication.model';


@Component({
  selector: 'app-publications-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publications-card.component.html',
  styleUrl: './publications-card.component.scss'
})

export class PublicationsCardComponent {
  @Input() publication: Publication | undefined;
}
