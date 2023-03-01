import { TestBed } from '@angular/core/testing';

import { WeatherIconMapperService } from './weather-icon-mapper.service';

describe('WeatherIconMapperService', () => {
    let service: WeatherIconMapperService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WeatherIconMapperService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
