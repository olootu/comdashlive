import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'number-of-locations',
  templateUrl: './number-of-locations.component.html',
  styleUrls: ['./number-of-locations.component.scss']
})
export class NumberOfLocationsComponent implements OnInit {

  selectedFood;

  foods: any = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
