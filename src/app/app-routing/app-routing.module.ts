import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SocialCodingComponent } from '../social-coding/social-coding.component';
import { AchievementsComponent } from '../achievements/achievements.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'social-coding', component: SocialCodingComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
