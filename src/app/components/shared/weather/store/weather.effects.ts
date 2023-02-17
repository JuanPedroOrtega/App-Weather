import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Weather } from '../weather';
import { WeatherService } from '../weather.service';
import { fetchWeatherSuccess, fetchWeatherError, fetchWeatherStart, fetchWeather } from './weather.actions';

@Injectable()
export class WeatherEffects {
    // create a new effect that triggers after the fetchWeather action,
    // and dispatches an action of fetchWeatherStart
    initLoadWeather$ = createEffect(() =>
        this.actions.pipe(
            ofType(fetchWeather),
            mergeMap(() => {
                return of(fetchWeatherStart())
            })));

    // create a new effect that triggers after the fetchWeatherStart action,
    // and calls an API. It will then dispatch a new action based on the result
    loadWeather$ = createEffect(() =>
        this.actions.pipe(
            ofType(fetchWeatherStart),
            mergeMap(() => this.service.fetchWeather()
            .pipe(
                map((weather: Weather) => fetchWeatherSuccess(weather)),
                catchError((error: Error) => of(fetchWeatherError({ error })))
            ))));

    constructor(private actions: Actions, private service: WeatherService) {}
}
