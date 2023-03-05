import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Weather } from '@models/weather';

import { changeCity, changeLang, changeUnits, fetchWeather } from './store/weather.actions';
import { selectCity, selectError, selectLang, selectLoading, selectUnits, selectWeather, WeatherState } from './store/weather.reducer';

@Component({
  selector: 'app-current-weather-page',
  templateUrl: './current-weather-page.component.html',
  styleUrls: ['./current-weather-page.component.scss']
})
export class CurrentWeatherPageComponent {
    public city$: Observable<string>;
    public lang$: Observable<string>;
    public units$: Observable<string>;
    public weather$: Observable<Weather>;
    public loading$: Observable<boolean>;
    public error$: Observable<Error | null>;

    public constructor(private readonly store: Store<WeatherState>) {
        this.city$ = this.store.select(selectCity);
        this.lang$ = this.store.select(selectLang);
        this.units$ = this.store.select(selectUnits);
        this.weather$ = this.store.select(selectWeather);
        this.loading$ = this.store.select(selectLoading);
        this.error$ = this.store.select(selectError);
    }

    public changeCity(e: Event) {
        this.store.dispatch(changeCity({ city: (e.target as  HTMLSelectElement).value }));
    }

    public changeLang(e: Event) {
        this.store.dispatch(changeLang({ lang: (e.target as  HTMLSelectElement).value }));
    }

    public changeUnits(e: Event) {
        this.store.dispatch(changeUnits({ units: (e.target as  HTMLSelectElement).value }));
    }

    public fetch(): void {
        this.store.dispatch(fetchWeather())
    }
}
