import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from '../services/weather.service';
import { DatePipe, formatDate } from '@angular/common';
import { KelvinToCelsiusPipe } from '../services/kelvin-to-celsius.pipe';

@Component({
  selector: 'app-line-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.scss'],
})
export class TemperatureChartComponent implements OnInit  {
  @Input() city: string;
  public chartType = 'line';
  weather$: Observable<any>;
  kelvinToCelsius = new KelvinToCelsiusPipe();

  public chartDatasets: Array<any> = [
    { label: 'Hourly forecast', data: [] },
  ];

  public chartLabels: Array<any> = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255, 213, 0, .2)',
      borderColor: 'rgba(255, 213, 0, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [{
          gridLines: {
              display: false
          }
      }],
      yAxes: [{
          gridLines: {
              display: false
          },
          angleLines: {
            display: false
          }
      }]
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
          label: function(tooltipItems, data) {
              return tooltipItems.yLabel + ' °C';
          }
      }
  },
  };

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getForecastForCity(this.city).subscribe(hourlyWeather => {

      for (const item of hourlyWeather.list.slice(0, 10)) {
        const time = new Date(item.dt * 1000);
        this.chartLabels.push(time.toLocaleTimeString().substr(0, time.toLocaleTimeString().length - 3));
        this.chartDatasets[0].data.push( this.kelvinToCelsius.transform(item.main.temp_max));
      }
    });
  }

}
