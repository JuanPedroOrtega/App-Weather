import { Component, Input } from '@angular/core';

import { Weather } from '@models/weather';
import { WeatherIconMapperService } from '@services/weather/weather-icon-mapper.service';

@Component({
    selector: 'app-weather-display',
    templateUrl: './weather-display.component.html',
    styleUrls: ['./weather-display.component.scss'],
})
export class WeatherDisplayComponent {
    @Input()
    public weather: Weather | null = null;

    constructor(private mapper: WeatherIconMapperService) {}

    public getIcon(weatherCode: number): string {
        return this.mapper.getIconForApiCode(weatherCode);
    }
}
