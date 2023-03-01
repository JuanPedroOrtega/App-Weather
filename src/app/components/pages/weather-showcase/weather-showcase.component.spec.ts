import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherShowcaseComponent } from './weather-showcase.component';

describe('WeatherShowcaseComponent', () => {
    let component: WeatherShowcaseComponent;
    let fixture: ComponentFixture<WeatherShowcaseComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WeatherShowcaseComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(WeatherShowcaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
