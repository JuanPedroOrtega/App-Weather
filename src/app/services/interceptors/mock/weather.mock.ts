import { HttpRequest } from '@angular/common/http';

import { Weather } from '@models/weather';

import { ApiMock } from './mock.interceptor';

export class WeatherMock implements ApiMock<Weather> {
    shouldMock(req: HttpRequest<any>): boolean {
        if (req.url.indexOf('api/weather') !== -1) {
            return true;
        }

        return false;
    }

    mock(url: string): Weather {
        return {
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
            }
        };
    }

}
