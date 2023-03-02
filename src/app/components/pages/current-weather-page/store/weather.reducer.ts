import { createFeature, createReducer, on } from '@ngrx/store';
import { Coordinates, ErrorPayload } from '@models/common';

import { Weather } from '@models/weather';

import {
    changeCity,
    changeLang,
    changeUnits,
    fetchWeatherSuccess,
    fetchWeatherStart,
    fetchWeatherError,
} from './weather.actions';

export type WeatherState = {
    city: string;
    cityCoords: Coordinates,
    lang: string;
    units: string;
    weather: Weather;
    loading: boolean;
    error: Error | null;
};

const initialState: WeatherState = {
    city: '',
    cityCoords: { lat: 0, lon: 0 },
    lang: 'en',
    units: 'metric',
    weather: {
        cityName: '',
        country: '',
        temperature: {
            current: 0,
            feelsLike: 0,
            min: 0,
            max: 0,
        },
        temperatureWithUnits: {
            current: '',
            feelsLike: '',
            min: '',
            max: '',
        },
        weather: {
            main: {
                code: 0,
                description: '',
            },
        },
        time: {
            sunrise: new Date(),
            sunset: new Date(),
        },
    },
    loading: false,
    error: null,
};

const LeVesinet: Coordinates = { lat: 48.892250, lon: 2.134620 }
const Bergen: Coordinates = { lat: 60.391262, lon: 5.322054 }
const Reykjavik: Coordinates = { lat: 64.126518, lon: -21.817438 }
const Madrid: Coordinates = { lat: 40.416775, lon: -3.703790 }

// Create a new feature (store sub-section)
export const weatherFeature = createFeature({
    name: 'weather',
    // It takes a reducer, that will transform the received stated into a new one
    reducer: createReducer(
        initialState,
        on(changeCity, (state: WeatherState, { city }: { city: string }) => {
            const coords =
                city === 'le-vesinet' ? LeVesinet :
                city === 'bergen' ? Bergen :
                city === 'reykjavik' ? Reykjavik :
                city === 'madrid' ? Madrid : undefined;

            const newState = {
                ...state,
                city,
            };

            if (coords) {
                newState.cityCoords = coords;
            }

            return newState;
        }),
        on(changeLang, (state: WeatherState, { lang }: { lang: string }) => ({
            ...state,
            lang,
        })),
        on(changeUnits, (state: WeatherState, { units }: { units: string }) => ({
            ...state,
            units,
        })),
        on(fetchWeatherStart, (state: WeatherState) => ({
            ...state,
            loading: true,
        })),
        on(fetchWeatherSuccess, (state: WeatherState, weather: Weather) => ({
            ...state,
            weather,
            loading: false,
            error: null,
        })),
        on(
            fetchWeatherError,
            (state: WeatherState, { error }: ErrorPayload) => ({
                ...state,
                loading: false,
                error,
            })
        )
    ),
});

// Export the created selectors from the feature
export const {
    selectCity,
    selectCityCoords,
    selectLang,
    selectUnits,
    selectWeather,
    selectLoading,
    selectError,
} = weatherFeature;
