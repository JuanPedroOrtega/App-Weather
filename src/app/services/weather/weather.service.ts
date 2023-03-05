import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Coordinates } from '@models/common';
import { OpenWeatherResponse } from '@models/owm';
import { Weather } from '@models/weather';
import { environment } from '@env/environment';

import { WeatherMapperService } from './weather-mapper.service';

@Injectable()
export class WeatherService {
    private units = 'metric';
    private lang = 'en';

    constructor(
        private readonly http: HttpClient,
        private readonly mapper: WeatherMapperService,
    ) {}

    public getTodayWeather(coords: Coordinates): Observable<Weather> {
        return this.http.get<OpenWeatherResponse>(this.getUrl(coords))
            .pipe(map((response: OpenWeatherResponse) => this.mapper.map(response, this.units)));
    }

    public fetchWeather(): Observable<Weather> {
        return this.http.get<Weather>('/api/weather');
    }

    private getUrl({ lat, lon }: Coordinates): string {
        const baseUrl = 'https://api.openweathermap.org/data/2.5'
        const key = environment.weatherApi;

        return `${baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${this.units}&lang=${this.lang}`;
    }
}
