import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDisplayComponent } from './weather-display.component';

describe('WeatherDisplayComponent', () => {
    let component: WeatherDisplayComponent;
    let fixture: ComponentFixture<WeatherDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WeatherDisplayComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(WeatherDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
