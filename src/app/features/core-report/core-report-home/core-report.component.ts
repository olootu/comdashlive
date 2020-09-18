import { Component, OnInit } from '@angular/core';
import { CoreReportsService } from '../services/core-report.service';

@Component({
  selector: 'core-report',
  templateUrl: './core-report.component.html',
  styleUrls: ['./core-report.component.scss']
})
export class CoreReportComponent implements OnInit {

  constructor(private http: CoreReportsService) { }

  ngOnInit(): void {

    this.http.getData();
  }

}
