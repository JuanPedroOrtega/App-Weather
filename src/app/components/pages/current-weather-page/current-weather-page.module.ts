import { NgModule } from '@angular/core';

import { CoreModule } from 'src/app/modules/core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { CurrentWeatherPageRoutingModule } from './current-weather-page-routing.module';
import { CurrentWeatherPageComponent } from './current-weather-page.component';

@NgModule({
    declarations: [CurrentWeatherPageComponent],
    imports: [
        CoreModule,
        SharedModule,
        CurrentWeatherPageRoutingModule
    ],
})
export class CurrentWeatherPageModule {}
