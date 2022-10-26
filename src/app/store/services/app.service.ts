import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coffee } from '../models/coffee';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl = 'https://random-data-api.com/api/';
  private coffeeEndpoint = 'coffee/random_coffee';
  private sizeQuery = '?size=50';

  constructor(private http: HttpClient) { }

  getCoffee(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.coffeeEndpoint}${this.sizeQuery}`);
  }
}
