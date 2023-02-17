import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from './ui/ui.module';
import { CounterModule } from './counter/counter.module';
import { WeatherModule } from './weather/weather.module';

const PUBLIC_MODULES = [
    UiModule,
    CounterModule,
    WeatherModule,
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...PUBLIC_MODULES
    ],
    exports: [
        ...PUBLIC_MODULES
    ]
})
export class SharedModule {}
