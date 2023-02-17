import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { fetchWeather } from './store/weather.actions';
import { selectError, selectLoading, selectWeather, WeatherState } from './store/weather.reducer';
import { Weather } from './weather';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
    public weather$: Observable<Weather>;
    public loading$: Observable<boolean>;
    public error$: Observable<Error | null>;

    constructor(private readonly store: Store<WeatherState>) {
        this.weather$ = this.store.select(selectWeather);
        this.loading$ = this.store.select(selectLoading);
        this.error$ = this.store.select(selectError);
    }

    public fetch(): void {
        this.store.dispatch(fetchWeather())
    }
}
