import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  favoriteCities = ['Iasi', 'Amsterdam', 'Edinburgh', 'Barcelona', 'Oslo'];
  currentWeather: Map<string, any> = new Map();

  constructor(private weatherService: WeatherService) { }

  getCurrentWeather(city: string): any {
    return this.currentWeather.get(city);
  }
}
