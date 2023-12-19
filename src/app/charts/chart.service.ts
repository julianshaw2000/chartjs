import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private httpClient: HttpClient) { }

  getChartInfo() {
    return this.httpClient.get('http://localhost:3000/sales');
  }
}
