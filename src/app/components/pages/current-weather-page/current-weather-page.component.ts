import { Component } from '@angular/core';

import { AppWeather, Coord, Weather, WeatherResponse } from 'src/app/models/weather';
import { WeatherIconMapperService } from 'src/app/services/weather/weather-icon-mapper.service';
import { WeatherService } from 'src/app/services/weather/weather.service';

const LeVesinet: Coord = { lat: 48.892250, lon: 2.134620 }
const Bergen: Coord = { lat: 60.391262, lon: 5.322054 }
const Reykjavik: Coord = { lat: 64.126518, lon: -21.817438 }
const Madrid: Coord = { lat: 40.416775, lon: -3.703790 }

@Component({
  selector: 'app-current-weather-page',
  templateUrl: './current-weather-page.component.html',
  styleUrls: ['./current-weather-page.component.scss']
})
export class CurrentWeatherPageComponent {
    public weather?: AppWeather;
    public units = 'metric';
    public lang = 'en';
    public city = '';

    public constructor(private mapper: WeatherIconMapperService, private readonly service: WeatherService) {}

    public fetch(): void {
        const coords =
            this.city === 'le-vesinet' ? LeVesinet :
            this.city === 'bergen' ? Bergen :
            this.city === 'reykjavik' ? Reykjavik :
            this.city === 'madrid' ? Madrid : undefined;

        if (!coords) return;

        this.service.getTodayWeather(coords)
            .subscribe((weather: AppWeather) => this.weather = weather);
    }

    public getIcon(weatherCode: number): string {
        return this.mapper.getIconForApiCode(weatherCode);
    }

    public getUnits(): string {
        return (
            this.units === 'metric' ? '°C' :
            this.units === 'imperial' ? '°F' : 'K'
        )
    }
}
