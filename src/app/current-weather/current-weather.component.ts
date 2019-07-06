import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() city: string;
  icon: string;
  weather$: Observable<any>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weather$ = this.weatherService.getCurrentWeather(this.city);
  }
}
