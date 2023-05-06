import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './screens/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeadToHeadComponent } from './screens/head-to-head/head-to-head.component';
import { LineupsComponent } from './screens/lineups/lineups.component';
import { StatsComponent } from './screens/stats/stats.component';
import { MatchEventComponent } from './components/match-event/match-event.component';
import { LineupComponent } from './components/lineup/lineup.component';
import { MatchPlayerStatsComponent } from './components/match-player-stats/match-player-stats.component';
import { PlayerComponent } from './screens/player/player.component';
import { LeagueComponent } from './screens/league/league.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownDirective } from './shares/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadToHeadComponent,
    LineupsComponent,
    StatsComponent,
    MatchEventComponent,
    LineupComponent,
    MatchPlayerStatsComponent,
    PlayerComponent,
    LeagueComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
