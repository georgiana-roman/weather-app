import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { TemperatureChartComponent } from './temperature-chart/temperature-chart.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { MatTabsModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { KelvinToCelsiusPipe } from './services/kelvin-to-celsius.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TemperatureChartComponent,
    CurrentWeatherComponent,
    KelvinToCelsiusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    CommonModule
  ],
  providers: [HttpClient, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
