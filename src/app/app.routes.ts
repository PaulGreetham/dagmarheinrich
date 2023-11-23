import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./Pages/home/home.component";
import { AwardsComponent } from './Pages/awards/awards.component';
import { ExperienceComponent } from './Pages/experience/experience.component';
import { EducationComponent } from './Pages/education/education.component';
import { PublicationsComponent } from './Pages/publications/publications.component';
import { ContactComponent } from './Pages/contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
