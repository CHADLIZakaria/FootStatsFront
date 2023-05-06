import { Component, OnInit } from '@angular/core';
import { LeaguesResponse } from './new_models/Leagues/LeaguesResponse';
import { ServerService } from './services/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentDate: Date = new Date()
  leagues!: Array<LeaguesResponse>;

  constructor(private serverService: ServerService) {

  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentDate = new Date()
    }, 1000)

    this.serverService.leagues().subscribe(
      data => {
        this.leagues = data.response
      }
    )
  }

  
  
}
