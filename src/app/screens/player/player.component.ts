import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerInfoResponse } from 'src/app/new_models/Player/PlayerInfo/PlayerInfoResponse';
import { ServerService } from 'src/app/services/server.service';
import { PlayerTransferResponse } from 'src/app/new_models/Player/PlayerTransfer/PlayerTransferResponse';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player!: PlayerInfoResponse;
  transfers!: PlayerTransferResponse
  trophies: any = []

  constructor(private router: ActivatedRoute, private serverService: ServerService) { }

  ngOnInit(): void {
    const playerId = Number(this.router.snapshot.paramMap.get("playerid"))
    console.log(playerId)

    this.serverService.playerInfo(playerId, 2022).subscribe({
      next: (data) => {
        this.player = data.response[0]
      }
    })

    this.serverService.playerTransfers(playerId).subscribe({
      next: (data) => {
        this.transfers = data.response[0]
      }
    })

    this.serverService.playerTrophies(playerId).subscribe({
      next: (data) => {
        const map1 = new Map();
        data.response.filter(trophies => trophies.place==='Winner').map(element => {
          if(map1.has(element.league)) {
            let seasons: string[] = map1.get(element.league)
            seasons.push(element.season)
            map1.set(element.league, seasons)
          }
          else {
            map1.set(element.league, [element.season])
          }
        })
        for(let i=0; i < Array.from(map1.values()).length; i++) {
          this.trophies.push([Array.from(map1.keys())[i], Array.from(map1.values())[i]])
        }
      }
    })
    /*
    this.playerStorageService.findPlayer(playerId, 2022).subscribe({
      next: (data) => {
        this.serverService.playerTransfers
        this.player = data.response[0]
      }
    })
    this.playerStorageService.findPlayerTransfers(playerId).subscribe({
      next: (data) => {
        this.transfers = data.response[0].transfers
      }
    })
   

    this.playerStorageService.findPlayerTrophies(playerId).subscribe({
      next: (data) => {
        const map1 = new Map();
        data.response.filter(trophies => trophies.place==='Winner').map(element => {
          if(map1.has(element.league)) {
            let seasons: string[] = map1.get(element.league)
            seasons.push(element.season)
            map1.set(element.league, seasons)
          }
          else {
            map1.set(element.league, [element.season])
          }
        })
        for(let i=0; i < Array.from(map1.values()).length; i++) {
          this.trophies.push([Array.from(map1.keys())[i], Array.from(map1.values())[i]])
        }
      }
    })
     */
  }
   
  checkNull(value: any) {
    if(value === null) return "-"
    else return value
  }

}
