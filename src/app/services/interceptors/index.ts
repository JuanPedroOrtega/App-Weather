import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockInterceptor } from './mock/mock.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
];
