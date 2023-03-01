import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherPageComponent } from './current-weather-page.component';

describe('CurrentWeatherPageComponent', () => {
    let component: CurrentWeatherPageComponent;
    let fixture: ComponentFixture<CurrentWeatherPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CurrentWeatherPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CurrentWeatherPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
