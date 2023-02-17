import { HttpRequest } from '@angular/common/http';
import { Weather } from '@app/components/shared/weather/weather';
import { ApiMock } from './mock.interceptor';

export class WeatherMock implements ApiMock<Weather> {
    shouldMock(req: HttpRequest<any>): boolean {
        if (req.url.indexOf('api/weather') !== -1) {
            return true;
        }

        return false;
    }

    mock(url: string): Weather {
        return { sunny: true };
    }

}
