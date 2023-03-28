import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  error: string = '';
  searchText: any;
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

  constructor(private weatherService: WeatherService, private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  search() {

    const location = this.locations.find(l => l.city.toLowerCase() === this.searchText.toLowerCase());
    if (location) {
      this.router.navigate(['/weather', location.city, location.countryCode]);
    } else {
      console.log('Location not found');
    }
    this.error = '';

    if (this.searchText.trim() !== '') {
      this.weatherService.getWeather(this.searchText.trim(), '').subscribe({
        next: (res: any) => {
          console.log(res);
          this.router.navigate(['/weather', res.name, res.sys.country]);
        },
        error: (error: any) => {
          console.log(error);
          this.error = 'Error fetching weather information. Please try again.';
        }
      });
    } else {
      this.error = 'Please enter a location.';
    }
  }
}


