import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  API_KEY = '8c8b21a2d555223a436468a268aa4414';
  API_URL_CURRENT = 'http://api.openweathermap.org/data/2.5/weather/?q=';
  API_URL_FORECAST = 'http://api.openweathermap.org/data/2.5/forecast/?q=';

  constructor(private httpClient: HttpClient) {}

  getCurrentWeather(city: string): Observable<any> {
    return this.httpClient
      .get(`${this.API_URL_CURRENT}${city}&appid=${this.API_KEY}`)
      .pipe(
        map((response) => response),
        catchError((error: any) => Observable.throw(error.json().error || 'Something went wrong'))
      );
  }

  getForecastForCity(city: string): Observable<any> {
    return this.httpClient
      .get(`${this.API_URL_FORECAST}${city}&appid=${this.API_KEY}`)
      .pipe(
        map((response) => response),
        catchError((error: any) => Observable.throw(error.json().error || 'Something went wrong'))
      );
}


}
