import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';

import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
    declarations: [],
    imports: [CoreModule, HomePageRoutingModule],
})
export class HomePageModule {}
