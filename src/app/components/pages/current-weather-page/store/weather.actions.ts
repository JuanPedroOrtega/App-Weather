import { createAction, props } from '@ngrx/store';

import { ErrorPayload } from '@models/common';
import { Weather } from '@models/weather';

export const changeCity = createAction('[Weather] Change city', props<{ city: string }>());
export const changeLang = createAction('[Weather] Change lang', props<{ lang: string }>());
export const changeUnits = createAction('[Weather] Change units', props<{ units: string }>());
export const fetchWeather = createAction('[Weather] Fetch');
export const fetchWeatherStart = createAction('[Weather] Fetch Start');
export const fetchWeatherSuccess = createAction('[Weather] Fetch Success', props<Weather>());
export const fetchWeatherError = createAction('[Weather] Fetch Error', props<ErrorPayload>());
