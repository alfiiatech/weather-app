import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  
  locations = [
    {
      name: 'New York City',
      temperature: '21'
    },
    {
      name: 'Paris',
      temperature: 'The capital city of France, known for its romantic atmosphere and world-famous cuisine.'
    },
    {
      name: 'Tokyo',
      temperature: 'The capital city of Japan, known for its cutting-edge technology and unique culture.'
    },
  ];
}
