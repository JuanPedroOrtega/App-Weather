import { createFeature, createReducer, on } from '@ngrx/store';
import { ErrorPayload } from '@app/models';

import { Weather } from '../weather';
import { fetchWeatherSuccess, fetchWeatherStart, fetchWeatherError } from './weather.actions';

export type WeatherState = {
    weather: Weather,
    loading: boolean,
    error: Error | null
}

const initialState: WeatherState = {
    weather: {
        sunny: false
    },
    loading: false,
    error: null
};

// Create a new feature (store sub-section)
export const weatherFeature = createFeature({
    name: 'weather',
    // It takes a reducer, that will transform the received stated into a new one
    reducer: createReducer(
        initialState,
        on(fetchWeatherStart, (state: WeatherState) => ({ ...state, loading: true })),
        on(fetchWeatherSuccess, (state: WeatherState, weather: Weather) => ({ ...state, weather, loading: false, error: null })),
        on(fetchWeatherError, (state: WeatherState, { error }: ErrorPayload) => ({ ...state, loading: false, error })),
    )
});

// Export the created selectors from the feature
export const { selectWeather, selectLoading, selectError } = weatherFeature;
