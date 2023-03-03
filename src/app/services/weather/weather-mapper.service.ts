import { Injectable } from '@angular/core';
import { AppWeather, WeatherResponse } from 'src/app/models/weather';

@Injectable({
    providedIn: 'root',
})
export class WeatherMapperService {
    constructor() {}

    public map(response: WeatherResponse, units = 'metric'): AppWeather {
        const mainWeather = response.weather[0];
        // const otherWeather = response.weather[0];
        return {
            cityName: response.name,
            country: response.sys.country,
            weather: {
                main: {
                    code: mainWeather.id,
                    description: mainWeather.description
                }
            },
            temperature: {
                current: response.main.temp,
                feelsLike: response.main.feels_like,
                min: response.main.temp_min,
                max: response.main.temp_max,
            },
            temperatureWithUnits: {
                current: `${response.main.temp} ${this.mapUnits(units)}`,
                feelsLike: `${response.main.feels_like} ${this.mapUnits(units)}`,
                min: `${response.main.temp_min} ${this.mapUnits(units)}`,
                max: `${response.main.temp_max} ${this.mapUnits(units)}`,
            },
            time: {
                sunrise: this.mapToRelativeLocalDate(response.sys.sunrise, response.timezone),
                sunset: this.mapToRelativeLocalDate(response.sys.sunset, response.timezone),
            }
        }
    }

    private mapToRelativeLocalDate(unix: number, timezone: number): Date {
        const date = new Date();
        date.setTime(unix * 1000 + timezone * 1000);
        return date;
    }

    private mapUnits(units: string): string {
        return (
            units === 'metric' ? '°C' :
            units === 'imperial' ? '°F' : 'K'
        )
    }
}
