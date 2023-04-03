import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-location-card',
  templateUrl: './app-location-card.component.html',
  styleUrls: ['./app-location-card.component.css']
})
export class AppLocationCardComponent implements OnInit {

  locations = [
    { city: 'India', countryCode: 'in' },
    { city: 'London', countryCode: 'uk' },
    { city: 'New York', countryCode: 'us' },
    { city: 'Paris', countryCode: 'fr' },
    { city: 'Tokyo', countryCode: 'jp' },
    { city: 'Dubai', countryCode: 'ae' },
    { city: 'Sydney', countryCode: 'au' },
    { city: 'Cape Town', countryCode: 'za' }
  ];

  weatherData: any = [];

  constructor(private weatherService: WeatherService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData() {
    for (let location of this.locations) {
      this.weatherService.getWeather(location.city, location.countryCode).subscribe({
        next: (res: any) => {
          console.log(res);
          this.weatherData.push(res);
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.info('Completed');
        }
      });
    }
  }

  navigateToWeatherDetail(city: string, countryCode: string) {
    this.router.navigate(['/weather', city, countryCode]);
  }




}
