import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
  @Input() showIcon = true;
  @Output() ontoggleshowIcon: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick(): any {
    this.ontoggleshowIcon.emit();
  }

}
