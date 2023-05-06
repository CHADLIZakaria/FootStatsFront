import { Component, Input, OnInit } from '@angular/core';
import { Statistics } from 'src/app/new_models/Fixture/Statitics/Statistics';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() stats: Statistics[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  calcultPourcentProgress(statTeam1: String, statTeam2: String) {
    if(statTeam1=== null) {
      return "0%"
    }
    if(isNaN(+statTeam1)) {
      return statTeam1
    }
    else {
      return (+statTeam1/((+statTeam1)+(+statTeam2)))*100+'%'
    }
  }

}
