import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  weatherSub!: Subscription;

  constructor(private weatherService: WeatherService) { }
  ngOnInit(): void {
    this.weatherSub = this.weatherService.getWeatherData('Dhaka')
      .subscribe({
        next: (res) => {
          console.log(res);
        }
      })
  }
  ngOnDestroy(): void {
    this.weatherSub.unsubscribe();
  }
}
