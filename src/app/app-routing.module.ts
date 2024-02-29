import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';


const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'services', component: ActivitiesComponent },
  { path: 'skills', component: SkillsComponent },

  { path: '**', pathMatch:'full', redirectTo: 'portfolio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
