import { createAction, props } from '@ngrx/store';
import { ErrorPayload } from '@app/models';

import { Weather } from '../weather';

export const fetchWeather = createAction('[Weather] Fetch');
export const fetchWeatherStart = createAction('[Weather] Fetch Start');
export const fetchWeatherSuccess = createAction('[Weather] Fetch Success', props<Weather>());
export const fetchWeatherError = createAction('[Weather] Fetch Error', props<ErrorPayload>());
