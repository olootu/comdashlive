import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showIcon = true;
  constructor() { }

  ngOnInit(): void {
  }
  ontoggleshowIcon(): any {
    this.showIcon = !this.showIcon;
  }
}
