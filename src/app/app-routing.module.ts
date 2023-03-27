import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLocationCardComponent } from './app-location-card/app-location-card.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

const routes: Routes = [
  { path: '', component: AppLocationCardComponent },
  { path: 'weather/:city/:countryCode', component: WeatherDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
