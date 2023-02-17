import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { weatherFeature } from './store/weather.reducer';
import { WeatherEffects } from './store/weather.effects';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather.component';

@NgModule({
    declarations: [WeatherComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature(weatherFeature),
        EffectsModule.forFeature([WeatherEffects]),
    ],
    providers: [WeatherService],
    exports: [WeatherComponent]
})
export class WeatherModule {}
