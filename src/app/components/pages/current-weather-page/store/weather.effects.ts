import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import { Weather } from '@models/weather';

import { WeatherService } from '@services/weather/weather.service';
import { fetchWeatherSuccess, fetchWeatherError, fetchWeatherStart, fetchWeather } from './weather.actions';
import { Action, Store } from '@ngrx/store';
import { selectCityCoords, WeatherState } from './weather.reducer';

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
            // pass the store state to the map
            withLatestFrom(this.store.select(selectCityCoords)),
            mergeMap(([ _, coords ]) => this.service.getTodayWeather(coords)
            .pipe(
                delay(500),
                map((weather: Weather) => fetchWeatherSuccess(weather)),
                catchError((error: Error) => of(fetchWeatherError({ error })))
            ))));

    constructor(
        private actions: Actions,
        private service: WeatherService,
        private readonly store: Store<WeatherState>) {}
}
