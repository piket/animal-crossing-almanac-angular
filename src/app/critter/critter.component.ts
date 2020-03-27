import { Component, OnInit } from '@angular/core';
import { bugs, fish } from './data';

@Component({
  selector: 'app-critter',
  templateUrl: './critter.component.html',
  styleUrls: ['./critter.component.css']
})
export class CritterComponent implements OnInit {
  bugs = bugs;
  fish = fish;
  
  constructor() { }

  ngOnInit() {
  }

}