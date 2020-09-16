import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'year-date-display',
  templateUrl: './year-date-display.component.html',
  styleUrls: ['./year-date-display.component.scss']
})
export class YearDateDisplayComponent implements OnInit {
  date = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
