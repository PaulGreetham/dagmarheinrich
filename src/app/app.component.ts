import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { HomeComponent } from "./Pages/home/home.component";
import { NewsComponent } from './Pages/news/news.component';
import { ExperienceComponent } from "./Pages/experience/experience.component";
import { EducationComponent } from "./Pages/education/education.component";
import { PublicationsComponent } from "./Pages/publications/publications.component";
import { ContactComponent } from "./Pages/contact/contact.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, NavbarComponent, HomeComponent, NewsComponent, ExperienceComponent, EducationComponent, PublicationsComponent, ContactComponent]
})
export class AppComponent {
  title = 'dagmarheinrich';
}
