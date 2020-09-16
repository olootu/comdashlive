import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {
  selectedDate;

  constructor() { }

  ngOnInit(): void {
  }

}
