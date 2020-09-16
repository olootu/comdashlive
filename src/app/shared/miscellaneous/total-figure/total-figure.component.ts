import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'total-figure',
  templateUrl: './total-figure.component.html',
  styleUrls: ['./total-figure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalFigureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
