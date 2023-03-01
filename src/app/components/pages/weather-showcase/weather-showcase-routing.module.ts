import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherShowcaseComponent } from './weather-showcase.component';

const routes: Routes = [
    {
        path: '',
        component: WeatherShowcaseComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WeatherShowcaseRoutingModule {}
