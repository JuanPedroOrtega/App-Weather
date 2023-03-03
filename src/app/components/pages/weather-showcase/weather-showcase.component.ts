import { Component } from '@angular/core';

const codes2xx = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232]
const codes3xx = [300, 301, 302, 310, 311, 312, 313, 314, 321]
const codes5xx = [500, 501, 502, 503, 504, 511, 520, 521, 522, 531]
const codes6xx = [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622]
const codes7xx = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781]
const codes800 = [800]
const codes80x = [801, 802, 803, 804]

@Component({
    selector: 'app-weather-showcase',
    templateUrl: './weather-showcase.component.html',
    styleUrls: ['./weather-showcase.component.scss'],
})
export class WeatherShowcaseComponent {
    public codes = [
        { group: 'Thunderstorm', codes: codes2xx },
        { group: 'Drizzle', codes: codes3xx },
        { group: 'Rain', codes: codes5xx },
        { group: 'Snow', codes: codes6xx },
        { group: 'Atmosphere', codes: codes7xx },
        { group: 'Clear', codes: codes800 },
        { group: 'Clouds', codes: codes80x },
    ]
}
