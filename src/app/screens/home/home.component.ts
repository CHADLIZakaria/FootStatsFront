import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServerService } from 'src/app/services/server.service';
import { FixturesResponse } from 'src/app/new_models/Fixtures/FixturesResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  matcheDay!: Array<FixturesResponse>
  //matchEvents!: Array<fixturesEvents>
  //showEvents: Array<{idFixture: number, data: Array<Array<fixturesEvents>>}> = [];
  
  filterForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private serverService: ServerService) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      searchDate:  new FormControl(this.currentDate())
    });

    this.findMatchDay()
  }

  findMatchDay() {
    this.serverService.findMatchDay(this.filterForm.get("searchDate")!.value).subscribe({
      next: (data) => {
        this.matcheDay = data.response
      }
    })
  }

  currentDate(){
    const currentDate = new Date();
    return currentDate.toISOString().substring(0,10);
  }

  onPrevDay() {
    const currentDate = new Date(this.filterForm.get("searchDate")!.value)
    currentDate.setDate(currentDate.getDate()-1)
    this.filterForm.patchValue({
      searchDate:  currentDate.toISOString().substring(0,10)
    })
    this.findMatchDay()
  }
  
  onNextDay() {
    const currentDate = new Date(this.filterForm.get("searchDate")!.value)
    currentDate.setDate(currentDate.getDate()+1)
    this.filterForm.patchValue({
      searchDate:  currentDate.toISOString().substring(0,10)
    })
    this.findMatchDay()
  }

  getMatchStatus(shorStatus: string) {
    switch(shorStatus) {
      case "1H": return "1 mi-temps"
      case "2H": return "1 mi-temps"
      case "NS": return "Pas commencé"
      case "HT": return "Mi-temps"
      case "ET": return "Prolongation"
      case "P": return "Penalty en cours"
      case "FT": return "Match terminer"      
      case "AET": return "Match terminé après extra time"
      case "PEN": return "Match terminé après les penalties"
      case "BT": return "Temps de pause (en temps supplémentaire)"
      case "SUSP": return "Match suspendu"
      case "INT": return "Match interrompu"
      case "PST": return "Reporté"
      case "CANC": return "Annulé"
      case "ABD": return "Abandonné"
      case "WO": return "Forfait"
      case "LIVE": return "Direct"
      default: return shorStatus
    }
  }

  getStatusMatchLive(shorStatus: string) {
    if(shorStatus === "1H" || shorStatus === "2H" || shorStatus === "HT" ||  shorStatus === "ET" || shorStatus === "P" || shorStatus === "BT"|| shorStatus === "LIVE") {
      return true
    }
    return false
  }


  checkFixtureExists(idFixture: number) {
    let fixtureExists = false;
    /*
    this.showEvents.forEach(event => {
      if(idFixture == event.idFixture) {
        fixtureExists=true; 
      } 
    })*/
    return fixtureExists
  }

  findFixtureById(idFixture: number) {
    /*
    return this.showEvents.filter(event => idFixture===event.idFixture)[0].data
    */
  }

  toggleShowEvent(idFixture: number) {
    let fixtureExists = this.checkFixtureExists(idFixture)
    if(fixtureExists) {
      this.removeShowEvent(idFixture)
    }
    else {
      this.addShowEvent(idFixture)
    }
  }

  addShowEvent(idFixture: number) {
    /*
    let currentFixture = this.matcheDay.filter(match => match.fixture.id == idFixture)
    let eventTeam1: Array<fixturesEvents> = [];
    let eventTeam2: Array<fixturesEvents> = [];
    this.homeStorageService.findShowEvent(idFixture).subscribe({
      next: (data: fixturesEventsResponsePagination) => {
        data.response.forEach(event => {
          if(currentFixture[0].teams.home.id === event.team.id) {
            eventTeam1.push(event)
          } 
          if(currentFixture[0].teams.away.id === event.team.id) {
            eventTeam2.push(event)
          }
        })
        this.matchEvents = data.response;
        this.showEvents.push({idFixture: idFixture, data: [eventTeam1, eventTeam2]})
      } 
    })
    */
  }

  removeShowEvent(idFixture: number) {
    /*
    this.showEvents =  this.showEvents.filter(event => event.idFixture !== idFixture)
    */
  }

}
