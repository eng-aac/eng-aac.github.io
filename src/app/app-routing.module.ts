import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';


const routes: Routes = [
  { path: 'skills', component: SkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },

  { path: '**', pathMatch:'full', redirectTo: 'skills' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
