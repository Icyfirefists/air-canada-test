import { Coffee } from './../models/coffee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { inject, TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let httpTestingController: HttpTestingController;
  let url: string;
  let testCoffee: Coffee;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AppService);
    httpTestingController = TestBed.get(HttpTestingController);
    url = "https://random-data-api.com/api/coffee/random_coffee?size=50";
    testCoffee = {
      id: 1064,
      uid: 'e5d28880-2dbe-445d-9240-e3bcb47c3929',
      blend_name: 'Strong Volcano',
      origin: 'West Valley, Costa Rica',
      variety: 'Villa Sarchi',
      notes: 'quick, slick, curry, nougat, honeydew',
      intensifier: 'muted',
    };

  });

  it('should be created', () => {
    expect(service).toBeTruthy();

  });

  it("should return data", () => {
  let result: any[];
  service.getCoffee().subscribe(coffeeData => {
    result = coffeeData;
    expect(typeof(result[0])).toEqual(typeof(testCoffee));
  });
  const req = httpTestingController.expectOne({
    method: "GET",
    url: url
  });

  req.flush([testCoffee]);
});

  beforeEach(inject(
    [AppService],
    (service: AppService) => {
      service = service;
    }
  ));

});
