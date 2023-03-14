import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';

import { NavigationComponent } from './navigation/navigation.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { NavigationTabsComponent } from './navigation-tabs/navigation-tabs.component';

const declarations = [
    NavigationComponent,
    WeatherIconComponent,
    WeatherDisplayComponent,
    NavigationTabsComponent,
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
