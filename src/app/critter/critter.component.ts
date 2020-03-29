import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { BUG_LIST, FISH_LIST } from './critter';

@Component({
  selector: 'app-critter',
  templateUrl: './critter.component.html',
  styleUrls: ['./critter.component.css']
})
export class CritterComponent implements OnInit {
  critter_data;
  headers;
  
  // @Input() critters;
  constructor() {
    this.critter_data = FISH_LIST;
    this.headers = ['name', 'image', 'price', 'location', 'shadow'];
   }

  ngOnInit() {
  }

}