import { TestBed } from '@angular/core/testing';

import { WeatherMapperService } from './weather-mapper.service';

describe('WeatherMapperService', () => {
    let service: WeatherMapperService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WeatherMapperService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
