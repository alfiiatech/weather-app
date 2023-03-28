import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  city: string = '';
  countryCode: string = '';
  weatherData: any = {};

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.city = params['city'];
      this.countryCode = params['countryCode'];
      this.getWeatherData();
    });
  }

  getWeatherData() {
    this.weatherService.getWeather(this.city, this.countryCode).subscribe({
      next: (res: any) => {
        console.log(res);
        this.weatherData = res;
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
