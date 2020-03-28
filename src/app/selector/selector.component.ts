import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
        datetime: this.datetime.toLocaleString(navigator.language),
        critter: this.critters
      });
    }

  onSumbit() {
    this.datetime = new Date();
    console.log("submitted");
  }

}