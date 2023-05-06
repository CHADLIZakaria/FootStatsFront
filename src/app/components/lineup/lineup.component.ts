import { Component, Input, OnInit } from '@angular/core';
import { Lineup } from 'src/app/new_models/Fixture/Lineups/Lineup';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css']
})
export class LineupComponent implements OnInit {
  @Input() lineups!: Array<Lineup>;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.lineups)
  }

  getLineColumnSpaceLeftTeam(grid: string) {
   
    let formation = this.lineups[0].formation
    let [line, column] = [...grid.split(":")]
    let lineColumnSpace = {left: "1%", top: "50%"}
    if(line==="1" && column ==="1") return lineColumnSpace;
    //For 1 columns
    if(formation.split("-")[+line-2] === "1") {
      switch(column) {
        case "1": lineColumnSpace.top="50%"; break;
      }
    }
     //For 2 columns
     else if(formation.split("-")[+line-2] === "2") {
      switch(column) {
        case "1": lineColumnSpace.top="40%"; break;
        case "2": lineColumnSpace.top="60%"; break;
      }
    }
    //For 3 columns
    else if(formation.split("-")[+line-2] === "3") {
      switch(column) {
        case "1": lineColumnSpace.top="35%"; break;
        case "2": lineColumnSpace.top="50%"; break;
        case "3": lineColumnSpace.top="65%"; break;
      }
    }
    //For 4 columns
    else if(formation.split("-")[+line-2] === "4") {
      switch(column) {
        case "1": lineColumnSpace.top="25%"; break;
        case "2": lineColumnSpace.top="40%"; break;
        case "3": lineColumnSpace.top="60%"; break;
        case "4": lineColumnSpace.top="75%"; break;
      }
    }
    //For 5 columns
     else if(formation.split("-")[+line-2] === "5") {
      switch(column) {
        case "1": lineColumnSpace.top="15%"; break;
        case "2": lineColumnSpace.top="33%"; break;
        case "3": lineColumnSpace.top="50%"; break;
        case "4": lineColumnSpace.top="65%"; break;
        case "5": lineColumnSpace.top="85%"; break;
      }
    }
    
    //For 3 lines
    if(formation.split("-").length === 3) {
      switch(line) {
        case "2": lineColumnSpace.left="35%"; break;
        case "3": lineColumnSpace.left="60%"; break;
        case "4": lineColumnSpace.left="85%"; break;
      }
    }

    //For 4 lines
    if(formation.split("-").length === 4) {
      switch(line) {
        case "2": lineColumnSpace.left="25%"; break;
        case "3": lineColumnSpace.left="45%"; break;
        case "4": lineColumnSpace.left="65%"; break;
        case "5": lineColumnSpace.left="85%"; break;
      }
    }
    return lineColumnSpace
  }

  getLineColumnSpaceRightTeam(grid: string) {
    let formation = this.lineups[1].formation
    let [line, column] = [...grid.split(":")]
    let lineColumnSpace = {right: "1%", top: "50%"}
    if(line==="1" && column==="1") return lineColumnSpace;
    //For 1 columns
    if(formation.split("-")[+line-2] === "1") {
      switch(column) {
        case "1": lineColumnSpace.top="50%"; break;
      }
    }
   //For 2 columns
   else if(formation.split("-")[+line-2] === "2") {
      switch(column) {
        case "1": lineColumnSpace.top="40%"; break;
        case "2": lineColumnSpace.top="60%"; break;
      }
    }
    //For 3 columns
    else if(formation.split("-")[+line-2] === "3") {
      switch(column) {
        case "1": lineColumnSpace.top="35%"; break;
        case "2": lineColumnSpace.top="50%"; break;
        case "3": lineColumnSpace.top="65%"; break;
      }
    }
    //For 4 columns
    else if(formation.split("-")[+line-2] === "4") {
      switch(column) {
        case "1": lineColumnSpace.top="15%"; break;
        case "2": lineColumnSpace.top="40%"; break;
        case "3": lineColumnSpace.top="60%"; break;
        case "4": lineColumnSpace.top="85%"; break;
      }
    }
    //For 5 columns
     else if(formation.split("-")[+line-2] === "5") {
      switch(column) {
        case "1": lineColumnSpace.top="25%"; break;
        case "2": lineColumnSpace.top="40%"; break;
        case "3": lineColumnSpace.top="50%"; break;
        case "4": lineColumnSpace.top="60%"; break;
        case "5": lineColumnSpace.top="75%"; break;
      }
    }
    
    //For 3 lines
    if(formation.split("-").length === 3) {
      switch(line) {
        case "2": lineColumnSpace.right="20%"; break;
        case "3": lineColumnSpace.right="40%"; break;
        case "4": lineColumnSpace.right="60%"; break;
      }
    }

    //For 4 lines
    if(formation.split("-").length === 4) {
      switch(line) {
        case "2": lineColumnSpace.right="25%"; break;
        case "3": lineColumnSpace.right="45%"; break;
        case "4": lineColumnSpace.right="65%"; break;
        case "5": lineColumnSpace.right="85%"; break;
      }
    }
    return lineColumnSpace
  }


}
