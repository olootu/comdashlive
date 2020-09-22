import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportUrls } from '../../../shared/token/urls';
import { Report } from '../models/report.model';


@Injectable({
  providedIn: 'root'
})
export class CoreReportsService {


  url = '/v1/community/Mx6V22QBOPQ8S4DNL8A_/group';

  constructor(private http: HttpClient) { }

  getData(): Observable<Report[]> {
    return this.http.get<Report[]>(ReportUrls.GetCommunity);
  }
}
