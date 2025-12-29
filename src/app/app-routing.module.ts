import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';
import { FeaturingComponent } from './components/featuring/featuring.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';


const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'feats', component: FeaturingComponent },
  { path: 'services', component: ActivitiesComponent },
  { path: 'skills', component: SkillsComponent },

  { path: '**', pathMatch:'full', redirectTo: 'portfolio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
