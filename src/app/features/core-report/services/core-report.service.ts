import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoreReportsService {


  url = '/v1/community';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Observable<any>>(this.url).subscribe(data => { console.log(data) })
  }
}
