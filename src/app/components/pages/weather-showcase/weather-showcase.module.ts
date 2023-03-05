import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';

import { WeatherShowcaseRoutingModule } from './weather-showcase-routing.module';
import { WeatherShowcaseComponent } from './weather-showcase.component';

@NgModule({
    declarations: [WeatherShowcaseComponent],
    imports: [CoreModule, WeatherShowcaseRoutingModule],
})
export class WeatherShowcaseModule {}
