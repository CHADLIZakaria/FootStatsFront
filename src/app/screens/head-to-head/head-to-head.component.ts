import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-to-head',
  templateUrl: './head-to-head.component.html',
  styleUrls: ['./head-to-head.component.css']
})
export class HeadToHeadComponent implements OnInit {
  @Input() fixtureId!: number;


  constructor() { }

  ngOnInit(): void {
    
  }
  
}
