import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { FixtureResponse } from '../new_models/Fixture/FixtureResponse';
import { FixturesResponse } from '../new_models/Fixtures/FixturesResponse';
import { FootStatsReponse } from '../new_models/FootStatSReponse';
import { LeaguesResponse } from '../new_models/Leagues/LeaguesResponse';
import { LineupsResponse } from '../new_models/Lineups/LineupsResponse';
import { PlayerInfoResponse } from '../new_models/Player/PlayerInfo/PlayerInfoResponse';
import { PlayerTransferResponse } from '../new_models/Player/PlayerTransfer/PlayerTransferResponse';
import { PlayerTrophiesResponse } from '../new_models/Player/PlayerTrophies/PlayerTrophiesResponse';
import { StandingsResponse } from '../new_models/Standings/StandingsResponse';
import { LeagueStatsResponse } from '../new_models/LeagueStats/LeagueStatsResponse';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  leagues(): Observable<FootStatsReponse<LeaguesResponse>> {
    return this.http.get<FootStatsReponse<LeaguesResponse>>(`${environment.baseUrl}leagues`)
  }

  league(id: Number): Observable<FootStatsReponse<LeaguesResponse>> {
    return this.http.get<FootStatsReponse<LeaguesResponse>>(`${environment.baseUrl}leagues?id=${id}`)
  }

  findMatchDay(date: string): Observable<FootStatsReponse<FixturesResponse>> {
    return this.http.get<FootStatsReponse<FixturesResponse>>(`${environment.baseUrl}fixtures?date=${date}`)
  }

  lineups(fixture: Number): Observable<FootStatsReponse<LineupsResponse>> {
    return this.http.get<FootStatsReponse<LineupsResponse>>(`${environment.baseUrl}fixtures/lineups?fixture=${fixture}`)
  }

  fixture(fixture: Number): Observable<FootStatsReponse<FixtureResponse>> {
    return this.http.get<FootStatsReponse<FixtureResponse>>(`${environment.baseUrl}fixture?id=${fixture}`)
  }

  playerInfo(player: Number, season: Number): Observable<FootStatsReponse<PlayerInfoResponse>> {
    return this.http.get<FootStatsReponse<PlayerInfoResponse>>(`${environment.baseUrl}players?id=${player}&season=${season}`)
  }

  playerTrophies(player: Number): Observable<FootStatsReponse<PlayerTrophiesResponse>> {
    return this.http.get<FootStatsReponse<PlayerTrophiesResponse>>(`${environment.baseUrl}trophies?player=${player}`)
  }

  playerTransfers(player: Number): Observable<FootStatsReponse<PlayerTransferResponse>> {
    return this.http.get<FootStatsReponse<PlayerTransferResponse>>(`${environment.baseUrl}transfers?player=${player}`)
  }

  standings(season: number, league: number): Observable<FootStatsReponse<StandingsResponse>>  {
    return this.http.get<FootStatsReponse<StandingsResponse>>(`${environment.baseUrl}standings?season=${season}&league=${league}`)
  }

  topsoccers(season: number, league: number): Observable<FootStatsReponse<LeagueStatsResponse>>  {
    return this.http.get<FootStatsReponse<LeagueStatsResponse>>(`${environment.baseUrl}players/topscorers?season=${season}&league=${league}`)
  }

  topassists(season: number, league: number): Observable<FootStatsReponse<LeagueStatsResponse>>  {
    return this.http.get<FootStatsReponse<LeagueStatsResponse>>(`${environment.baseUrl}players/topassists?season=${season}&league=${league}`)
  }
  

}
