import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';




@Component({
  selector: 'app-location-card',
  templateUrl: './app-location-card.component.html',
  styleUrls: ['./app-location-card.component.css']
})
export class AppLocationCardComponent implements OnInit{
  @Input() location: any;

  constructor(private weatherService: WeatherService) { }
  ngOnInit(): void {
    // this.weatherService.getWeather().subscribe((data: any[]) => {
      // this.posts = data;
    // });
  }
}
