import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Weather } from './weather';

@Injectable()
export class WeatherService {
    constructor(private http: HttpClient) {}

    public fetchWeather(): Observable<Weather> {
        return this.http.get<Weather>('/api/weather');
    }
}
