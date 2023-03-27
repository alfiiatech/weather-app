  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class WeatherService {

    constructor(private http: HttpClient) { }

    getWeather(city: string, countryCode: string) {
      return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=70690d2c9fa97c10245d457ffa71df51&units=imperial`);
    }
    
  }
