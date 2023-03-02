import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppWeather, Coord, WeatherResponse } from 'src/app/models/weather';
import { environment } from 'src/environments/environment';
import { WeatherMapperService } from './weather-mapper.service';

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    private units = 'metric';
    private lang = 'en';

    constructor(
        private readonly http: HttpClient,
        private readonly mapper: WeatherMapperService,
    ) {}

    public getTodayWeather(coords: Coord): Observable<AppWeather> {
        return this.http.get<WeatherResponse>(this.getUrl(coords))
            .pipe(map((response: WeatherResponse) => this.mapper.map(response, this.units)));
    }

    private getUrl({ lat, lon }: Coord): string {
        const baseUrl = 'https://api.openweathermap.org/data/2.5'
        const key = environment.weatherApi;

        return `${baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${this.units}&lang=${this.lang}`;
    }
}
