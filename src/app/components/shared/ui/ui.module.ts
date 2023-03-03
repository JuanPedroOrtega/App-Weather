import { NgModule } from '@angular/core';

import { CoreModule } from 'src/app/modules/core/core.module';

import { NavigationComponent } from './navigation/navigation.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';

const declarations = [
    NavigationComponent,
    WeatherIconComponent,
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
