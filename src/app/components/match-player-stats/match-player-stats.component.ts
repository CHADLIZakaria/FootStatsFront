import { Component, Input, OnInit } from '@angular/core';
import { Players } from 'src/app/new_models/Fixture/Players/Players';

@Component({
  selector: 'app-match-player-stats',
  templateUrl: './match-player-stats.component.html',
  styleUrls: ['./match-player-stats.component.css']
})
export class MatchPlayerStatsComponent implements OnInit {
  @Input() players!: Players;

  constructor() { }

  ngOnInit(): void {
  }

  orderBy(column1: string, column2: string, order='ASC') {
    this.players.players.sort((a, b) => {
    const rowA = a.statistics[0][column1 as keyof typeof a.statistics[0]]
    const rowChildA = a.statistics[0][column1 as keyof typeof rowA][column2 as keyof typeof column2]
    const rowB = b.statistics[0][column1 as keyof typeof a.statistics[0]]
    const rowChildB = +b.statistics[0][column1 as keyof typeof rowB][column2 as keyof typeof column2]
    if(order==='ASC') {
      return rowChildB > rowChildA ? 1 : -1;
    }
    else {
      return rowChildA > rowChildB ? 1 : -1;
    }
  })
   
  }

}
