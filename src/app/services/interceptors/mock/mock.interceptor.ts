import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WeatherMock } from './weather.mock';

export interface ApiMock<T> {
    shouldMock(req: HttpRequest<any>): boolean;
    mock(url: string): T;
}

const mocks = [
    new WeatherMock()
]

@Injectable()
export class MockInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        for (const mock of mocks) {
            if (mock.shouldMock(req)) {
                return of(new HttpResponse({
                    status: 200,
                    body: mock.mock(req.url)
                }))
            }
        }

        return next.handle(req);

    }
}
