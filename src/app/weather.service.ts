import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = ``;

  constructor(private http: HttpClient) { }

  getWeather(cityName  : string) {
    // this.http.get(environment.weatherApiBaseUrl, {
    //   headers: new HttpHeaders()
    //   .set(environment.XRapidAPIHostHeaderName , environment.XRapidAPIHostHeaderValue)
    //   .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
    //   params: new HttpParams()
    // })
  }
}
