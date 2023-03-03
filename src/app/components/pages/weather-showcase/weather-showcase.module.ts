import { NgModule } from '@angular/core';

import { WeatherShowcaseRoutingModule } from './weather-showcase-routing.module';
import { WeatherShowcaseComponent } from './weather-showcase.component';
import { CoreModule } from 'src/app/modules/core/core.module';

@NgModule({
    declarations: [WeatherShowcaseComponent],
    imports: [CoreModule, WeatherShowcaseRoutingModule],
})
export class WeatherShowcaseModule {}
