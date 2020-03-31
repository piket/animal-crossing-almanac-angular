import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent {
  selectionForm;
  hemispheres = [
          {name: 'Northern', value: 'north'},
          {name: 'Southern', value: 'south'}
          ];
  critters = [
          {name: 'Fish', value: 'fish'},
          {name: 'Bugs', value: 'bugs'}
        ];
  datetime = new Date();

  constructor(
    private formBuilder: FormBuilder,
    ) {
      this.selectionForm = this.formBuilder.group({
        hemisphere: this.hemispheres,
        date: moment(),
        time: moment(),
        critter: this.critters
      });
    }

  onSumbit() {
    this.datetime = new Date();
    console.log("submitted");
  }

}