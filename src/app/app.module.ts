import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './components/shared/shared.module';

import { HomePageModule } from './components/pages/home-page/home-page.module';
import { CurrentWeatherPageModule } from './components/pages/current-weather-page/current-weather-page.module';
import { WeatherShowcaseModule } from './components/pages/weather-showcase/weather-showcase.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CoreModule,
        SharedModule,
        AppRoutingModule,
        HomePageModule,
        CurrentWeatherPageModule,
        WeatherShowcaseModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
