import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-weather-icon',
    templateUrl: './weather-icon.component.html',
    styleUrls: ['./weather-icon.component.scss'],
})
export class WeatherIconComponent {
    @Input()
    public icon: string | undefined = undefined;
}
