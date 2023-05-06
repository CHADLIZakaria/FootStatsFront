import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { StandingsResponse } from 'src/app/new_models/Standings/StandingsResponse';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LeaguesResponse } from 'src/app/new_models/Leagues/LeaguesResponse';
import { LeagueStatsResponse } from 'src/app/new_models/LeagueStats/LeagueStatsResponse';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  leagueRanking!: StandingsResponse;
  isLoading: boolean = true;
  league!: LeaguesResponse;
  topsocers!: LeagueStatsResponse[];
  topassists!: LeagueStatsResponse[];
  
  myForm!: FormGroup;

  constructor(private serverService: ServerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const leagueId = +params.get('id')!
      this.serverService.league(leagueId).subscribe(
        data => {
          this.league = data.response[0]
          //Find current Season
          const currentSeason = this.league.seasons.find(season => season.current)!.year
          this.myForm = new FormGroup({
            season: new FormControl(currentSeason),
            choice: new FormControl(2)
          })

          this.loadStandings()
          this.loadSoccers()
        }
      )
    })
  }

  onChangeSeason(season: number) {
    this.myForm.setValue({season: season})
    this.loadStandings()
  }

  onChangeChoice() {
    //this.myForm.setValue({choice: choice})
    const choice = this.myForm.value.choice
    console.log(choice)
    if(choice == 1) {
      this.loadStandings()
    }
    else if(choice == 2) {
      this.loadSoccers()
    }
    else if(choice == 3) {
      this.loadAssists()
    }

  }


  loadStandings() {
    this.serverService.standings(this.myForm.value.season, this.league.league.id).subscribe({
      next: (data) => {
        this.leagueRanking = data.response[0]
        this.isLoading = false
      }
    })
  }

  loadSoccers() {
    this.serverService.topsoccers(this.myForm.value.season, this.league.league.id).subscribe({
      next: (data) => {
        this.topsocers = data.response
        this.isLoading = false
      }
    })
  }

  loadAssists() {
    this.serverService.topassists(this.myForm.value.season, this.league.league.id).subscribe({
      next: (data) => {
        this.topassists = data.response
        this.isLoading = false
      }
    })
  }
}
