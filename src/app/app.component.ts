import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { HomeComponent } from "./Pages/home/home.component";
import { AwardsComponent } from "./Pages/awards/awards.component";
import { ExperienceComponent } from "./Pages/experience/experience.component";
import { EducationComponent } from "./Pages/education/education.component";
import { PublicationsComponent } from "./Pages/publications/publications.component";
import { ContactComponent } from "./Pages/contact/contact.component";
import { AccordionComponent } from "./Components/accordion/accordion.component";
import { Publication } from "./Models/publication.model";
import { PublicationsCardComponent } from "./Components/publications-card/publications-card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, NavbarComponent, PublicationsCardComponent, AccordionComponent, HomeComponent, AwardsComponent, ExperienceComponent, EducationComponent, PublicationsComponent, ContactComponent]
})
export class AppComponent {
  title = 'dagmarheinrich';
}
