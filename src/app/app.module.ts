import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './components/shared/shared.module';

import { HomePageModule } from './components/pages/home-page/home-page.module';
import { CurrentWeatherPageModule } from './components/pages/current-weather-page/current-weather-page.module';
import { WeatherShowcaseModule } from './components/pages/weather-showcase/weather-showcase.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//

import { httpInterceptorProviders } from './services/interceptors';
//


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        EffectsModule.forRoot(),
        CoreModule,
        SharedModule,
        AppRoutingModule,
        HomePageModule,
        CurrentWeatherPageModule,
        WeatherShowcaseModule,
    ],
    providers: [
        httpInterceptorProviders
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
