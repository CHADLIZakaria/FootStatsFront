import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadToHeadComponent } from './screens/head-to-head/head-to-head.component';
import { HomeComponent } from './screens/home/home.component';
import { LeagueComponent } from './screens/league/league.component';
import { LineupsComponent } from './screens/lineups/lineups.component';
import { PlayerComponent } from './screens/player/player.component';
import { StatsComponent } from './screens/stats/stats.component';

const routes: Routes = [
  {component: HomeComponent, path: ''},
  {component: LineupsComponent, path: 'lineups/:feature'},
  {component: StatsComponent, path: 'stats'},
  {component: HeadToHeadComponent, path: 'head'},
  {component: LeagueComponent, path: 'league/:id'},
  {component: PlayerComponent, path: 'player/:playerid'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
