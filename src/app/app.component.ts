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
      description: 'The largest city in the United States, known for its famous landmarks and diverse culture.'
    },
    {
      name: 'Paris',
      description: 'The capital city of France, known for its romantic atmosphere and world-famous cuisine.'
    },
    {
      name: 'Tokyo',
      description: 'The capital city of Japan, known for its cutting-edge technology and unique culture.'
    },
  ];
}
