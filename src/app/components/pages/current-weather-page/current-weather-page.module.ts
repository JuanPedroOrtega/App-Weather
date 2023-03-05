import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@components/shared/shared.module';
import { WeatherService } from '@services/weather/weather.service';
import { WeatherMapperService } from '@services/weather/weather-mapper.service';

import { weatherFeature } from './store/weather.reducer';
import { WeatherEffects } from './store/weather.effects';

import { CurrentWeatherPageRoutingModule } from './current-weather-page-routing.module';
import { CurrentWeatherPageComponent } from './current-weather-page.component';


@NgModule({
    declarations: [CurrentWeatherPageComponent],
    imports: [
        CoreModule,
        SharedModule,
        StoreModule.forFeature(weatherFeature),
        EffectsModule.forFeature([WeatherEffects]),
        CurrentWeatherPageRoutingModule,
    ],
    providers: [
        WeatherService,
        WeatherMapperService,
    ]
})
export class CurrentWeatherPageModule {}
