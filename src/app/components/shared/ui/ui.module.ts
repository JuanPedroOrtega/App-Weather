import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';

import { NavigationComponent } from './navigation/navigation.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';

const declarations = [
    NavigationComponent,
    WeatherIconComponent,
    WeatherDisplayComponent,
]

@NgModule({
    declarations: [
        ...declarations,
    ],
    imports: [
        CoreModule,
    ],
    exports: [
        ...declarations
    ]
})
export class UiModule {}
