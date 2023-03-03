import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class WeatherIconMapperService {
    constructor() {}

    public getIconForApiCode(code: number, isNight?: boolean): string {
        if ([613, 751].indexOf(code) !== -1) {
            return this.mapMissingIcons(code);
        }

        return `owm-${code}`;
    }

    private mapMissingIcons(code: number): string {
        if (code === 613) {
            return 'sleet';
        }

        if (code === 751) {
            return 'sandstorm';
        }

        return '';
    }
}
