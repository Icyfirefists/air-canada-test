import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public baseUrl = 'https://random-data-api.com/api/';
  public coffeeEndpoint = 'coffee/random_coffee';
  private sizeQuery = '?size=50';

  constructor(private http: HttpClient) { }

  getCoffee(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.coffeeEndpoint}${this.sizeQuery}`);
  }
}
