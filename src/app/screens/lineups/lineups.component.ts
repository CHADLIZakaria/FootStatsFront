import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FixtureResponse } from 'src/app/new_models/Fixture/FixtureResponse';
import { ServerService } from 'src/app/services/server.service';
import { FootStatsReponse } from 'src/app/new_models/FootStatSReponse';

@Component({
  selector: 'app-lineups',
  templateUrl: './lineups.component.html',
  styleUrls: ['./lineups.component.css']
})
export class LineupsComponent implements OnInit {
  isLoading: boolean=true;
  currentTab = 0;
  currentTabStats = 0;
  fixture!: FixtureResponse;
  
  
  constructor(private route: ActivatedRoute, private serverService: ServerService) { }

  ngOnInit(): void {  
    let fixtureId = Number(this.route.snapshot.paramMap.get("feature"))
    /*
    this.lineupsService.findFixtureById(fixtureId).subscribe({
      next: (data: fixtureResponsePagination) => {
        data.response[0].lineups.map(lineup => {
          lineup.startXI.map(startXI => {
            //startXI.player.logo = 
            data.response[0].players.concat(data.response[0].players[0])
          })
        })
        this.fixture = data.response[0]       
        this.isLoading = false
      }
    })*/

    this.serverService.fixture(fixtureId).subscribe({
      next: (data: FootStatsReponse<FixtureResponse>) => {
        this.fixture = data.response[0]     
        this.isLoading = false
      }
    })
  }
  
  
  changeTab(index: number) {
    this.currentTab = index;
  }

  changeTabStats(index: number) {
    this.currentTabStats = index
  }
 
}
